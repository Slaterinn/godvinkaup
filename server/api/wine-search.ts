// ~/server/api/wine-search.ts
import { openai } from '~/server/utils/openai'
import { qdrant } from '~/server/utils/qdrant'
import { extractFilters } from '~/server/utils/extractFilters'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const userQuery = body.query

  const config = useRuntimeConfig()

  const openaiClient = openai()
  const qdrantClient = qdrant()

  // Step 1: Parse filters locally with Compromise NLP
  const filters = extractFilters(userQuery)
  console.log('Extracted filters:', filters)

  // Step 2: Get embedding from OpenAI
  const embeddingResponse = await openaiClient.embeddings.create({
    model: 'text-embedding-3-small',
    input: userQuery
  })

  const vector = embeddingResponse.data[0].embedding

  // Step 3: Vector search in Qdrant
  const qdrantResponse = await qdrantClient.search(
    config.public.qdrantCollection as string,  // ✅ from runtimeConfig.public
    {
      vector,
      limit: 20,
      with_payload: true
    }
  )

  // Step 4: Map results from Qdrant and normalize prices
  let wines = qdrantResponse
    .map((point) => point.payload as any)
    .filter(
      (wine) =>
        wine.rating >= 3.0 &&
        wine.seller_link &&
        wine.category &&
        wine.wine_name &&
        wine.producer
    )
    .map((wine) => {
      // Normalize price: string → number
      let priceNum = 0
      if (wine.price) {
        if (typeof wine.price === 'string') {
          // Remove thousands separators and convert comma to dot if needed
          priceNum = parseFloat(wine.price.replace(/\./g, '').replace(',', '.'))
        } else if (typeof wine.price === 'number') {
          priceNum = wine.price
        }
      }

      return {
        wine_name: wine.wine_name,
        producer: wine.producer,
        rating: wine.rating,
        rating_count: wine.rating_count,
        category: wine.category,
        seller: wine.seller,
        seller_url: wine.seller_link,
        vivino_url: wine.link_vivino,
        food_pairings: wine.food_pairings || [],
        country: wine.country || '',
        district: wine.district || '',
        price: priceNum,
        image_url: wine.image_url
      }
    })

  // Step 5: Apply hard filters (strict exclusions)
  wines = wines.filter((wine) => {
    if (filters.minPrice !== undefined && wine.price < (filters.minPrice as any)['num']) return false
    if (filters.maxPrice !== undefined && wine.price > (filters.maxPrice as any)['num']) return false
    if (filters.minRating !== undefined && wine.rating < filters.minRating) return false
    if (filters.maxRating !== undefined && wine.rating > filters.maxRating) return false
    if (filters.sellers.length > 0) {
      const normalizedSeller = wine.seller.toLowerCase()
      const sellerMatch = filters.sellers.some((s) =>
        normalizedSeller.includes(s.toLowerCase())
      )
      if (!sellerMatch) return false
    }
    if (filters.categories.length > 0) {
      const normalizedCategory = wine.category.toLowerCase()
      const catMatch = filters.categories.some((c) =>
        normalizedCategory.includes(c.toLowerCase())
      )
      if (!catMatch) return false
    }
    if (filters.countries.length > 0) {
      const normalizedCountry = wine.country.toLowerCase()
      const countryMatch = filters.countries.some((c) =>
        normalizedCountry.includes(c.toLowerCase())
      )
      if (!countryMatch) return false
    }
    //console.log((filters.maxPrice as any)['num'])
    return true
  })

  // Step 6: Score and rerank results
  const scored = wines.map((wine) => {
    let score = 0

    // Base score: rating + slight boost for vote count
    score += wine.rating * 10
    score += Math.min(wine.rating_count, 5000) / 1000

    // Bonus for food pairings
    if (filters.foods.length && wine.food_pairings.length) {
      const match = filters.foods.some((food) =>
        wine.food_pairings
          .map((f: string) => f.toLowerCase())
          .includes(food.toLowerCase())
      )
      if (match) score += 5
    }

    // Bonus for type match
    if (filters.categories.length) {
      const typeMatch = filters.categories.some((type) =>
        wine.category.toLowerCase().includes(type)
      )
      if (typeMatch) score += 3
    }

    // Bonus for country/district match
    if (filters.countries.length) {
      const countryMatch = filters.countries.some((c) =>
        wine.country.toLowerCase().includes(c)
      )
      if (countryMatch) score += 2
    }
    if (filters.districts.length) {
      const districtMatch = filters.districts.some((d) =>
        wine.district.toLowerCase().includes(d)
      )
      if (districtMatch) score += 1
    }

    // If user asked for "best" or "recommended" → push rating weight
    if (filters.sortByRating) {
      score += wine.rating * 2
    }

    return { ...wine, score }
  })

  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 5)

  if (sorted.length === 0) {
    return {
      results: [],
      message: 'Engin vín fundust sem passa við fyrirspurnina 🍷'
    }
  }

  return {
    results: sorted
  }
})
