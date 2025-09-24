// server/utils/extractFilters.ts
import nlp from 'compromise'

export interface Filters {
  minPrice?: number
  maxPrice?: number
  minRating?: number
  maxRating?: number
  sellers: string[]
  categories: string[]
  countries: string[]
  districts: string[]   // 👈 added
  foods: string[]
  sortByRating: boolean
}

// Bilingual food pairing mapping
const FOOD_PAIRING_MAP: Record<string, string[]> = {
  beef: ['nautakjöt', 'steik'],
  lamb: ['lamb', 'lambakjöt'],
  cheese: ['ostur', 'ost'],
  chicken: ['kjúklingur'],
  fish: ['fiskur', 'hvítur fiskur'],
  pork: ['svínakjöt'],
  duck: ['andarkjöt'],
  venison: ['hreindýr'],
  salmon: ['lax'],
  pasta: ['pasta'],
}

// Wine categories
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  red: ['rauðvín', 'rauður', 'red', 'rautt', 'rauðvínum'],
  white: ['hvítvín', 'hvítur', 'white', 'hvítt', 'hvidt'],
  sparkling: ['freðivín', 'freyðandi', 'sparkling', 'champagne', 'cava', 'prosecco', 'búbblur', 'búbblu', 'sjampó'],
  rose: ['rósavín', 'bleikt', 'rosé', 'rose'],
  dessert: ['eftirréttarvín', 'dessert wine', 'port', 'sherry'],
}

// Sellers (normalize common names)
const SELLER_KEYWORDS: Record<string, string[]> = {
  'ÁTVR': ['vínbúðin', 'vínbúðinni', 'vinbudin', 'átvr', 'atvr', 'ríkið', 'ríkinu'],
  'sante': ['sante', 'santewines', 'santé'],
  'uva': ['uva', 'uvawines'],
}

export function extractFilters(query: string): Filters {
  const doc = nlp(query.toLowerCase())
  const filters: Filters = {
    sellers: [],
    categories: [],
    countries: [],
    foods: [],
    districts: [],
    sortByRating: false,
  }

  // --- Extract price ranges (krónur) ---
  const numbers = doc.numbers().json().map((n: any) => n.number) // n.number is already a number
  const maxPriceKeywords = ['undir', 'til', 'mest', 'má kosta', 'að', 'under', 'tops', 'max']

  if (numbers.length >= 2) {
    filters.minPrice = Math.min(numbers[0], numbers[1])
    filters.maxPrice = Math.max(numbers[0], numbers[1])
  } else if (numbers.length === 1) {
    const num = numbers[0]
    const queryLower = query.toLowerCase()
    if (maxPriceKeywords.some(k => queryLower.includes(k))) {
      filters.maxPrice = num
    } else if (queryLower.includes('yfir') || queryLower.includes('frá') || queryLower.includes('min')) {
      filters.minPrice = num
    } else {
      filters.maxPrice = num
    }
  }





  // --- Extract ratings ---
  if (query.includes('einkunn') || query.includes('rating')) {
    if (numbers.length >= 2) {
      filters.minRating = Math.min(numbers[0], numbers[1])
      filters.maxRating = Math.max(numbers[0], numbers[1])
    } else if (query.includes('yfir') && numbers.length === 1) {
      filters.minRating = numbers[0]
    } else if (query.includes('undir') && numbers.length === 1) {
      filters.maxRating = numbers[0]
    }
  }

  // --- Extract categories ---
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(k => query.includes(k))) {
      filters.categories.push(category)
    }
  }

  // --- Extract sellers ---
  for (const [seller, keywords] of Object.entries(SELLER_KEYWORDS)) {
    if (keywords.some(k => query.includes(k))) {
      filters.sellers.push(seller)
    }
  }

  // --- Extract countries (simple heuristic) ---
  const countryMatch = nlp(query).match('#Country').out('array')
  if (countryMatch.length > 0) {
    filters.countries.push(...countryMatch)
  }

  // --- Extract food pairings ---
  for (const [english, icelandicVariants] of Object.entries(FOOD_PAIRING_MAP)) {
    if (query.includes(english) || icelandicVariants.some(k => query.includes(k))) {
      filters.foods.push(english) // store normalized English key
    }
  }

  // --- Extract districts (proper nouns, fallback heuristic) ---
  const districtMatch = nlp(query).match('#Place').out('array')
  if (districtMatch.length > 0) {
    filters.districts.push(...districtMatch)
  }


  // --- Detect sorting intent ---
  if (
    query.includes('há einkunn') ||
    query.includes('best') ||
    query.includes('recommended') ||
    query.includes('mælt')
  ) {
    filters.sortByRating = true
  }

  return filters
}
