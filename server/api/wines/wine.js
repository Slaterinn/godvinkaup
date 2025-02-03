import wines from "~/data/wines_json.json";



export default defineEventHandler((event) => {
  const {search, category, minPrice, maxPrice, isOrganic, wineCountry, wineDistrict, seller} = getQuery(event);
  
  let filteredWines = wines


  if (search) {
    const searchProperties = ['wine_name', 'wine_name_vivino', 'country', 'category', 'origin_district', 
                              'produced_year', 'producer', 'boldness', 'sweetness', 'grapes', 'seller']; // List of properties to search in
    
    filteredWines = filteredWines.filter(wine => {
      // Convert the search string to lowercase for case insensitivity
      const searchTerm = search.toLowerCase();
  
      // Iterate over each property in the searchProperties array
      for (const key of searchProperties) {
        // Check if the property exists in the wine object and if its value contains the search string
        if (wine.hasOwnProperty(key) && wine[key] && wine[key].toString().toLowerCase().includes(searchTerm)) {
          // If any property value contains the search string, return true to include the wine in the filtered list
          return true;
        }
      }

      // If no property value contains the search string, return false to exclude the wine from the filtered list
      return false;
    });
  }

  if(category) {
    filteredWines = filteredWines.filter((wine) => {
      return wine.category === category || category === 'Any'
    })
  } 

  if(minPrice) {
    filteredWines = filteredWines.filter((wine) => {
      return parseInt(wine.price) >= parseInt(minPrice)
    })
  } 

  if(maxPrice) {
    filteredWines = filteredWines.filter((wine) => {
      return parseInt(wine.price) <= parseInt(maxPrice)
    })
  } 

  if(isOrganic) {
    filteredWines = filteredWines.filter((wine) => {
      return wine.is_organic === isOrganic || isOrganic === 'Any'
    })
  } 

  if(wineCountry) {
    filteredWines = filteredWines.filter((wine) => {
      return wine.country === wineCountry || wineCountry === 'Öll lönd'
    })
  } 

  if(wineDistrict) {
    filteredWines = filteredWines.filter((wine) => {
      return wine.origin_district === wineDistrict || wineDistrict === 'Öll svæði'
    })
  } 

  if(seller) {
    filteredWines = filteredWines.filter((wine) => {
      return wine.seller === seller || seller === 'Allir'
    })
  } 
  
  filteredWines.sort(function(a, b){
    return (b.recommendation) - (a.recommendation);
  });

  //SKila bara ákveðnum fjölda lína
  filteredWines  = filteredWines.filter(function(wine) {
    if (this.count < 100 && wine) {
      this.count++;
      return true;
    }
    return false;
  }, {count: 0});

  return filteredWines;
});