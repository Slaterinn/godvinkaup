import beers from "~/data/beers_json.json";

export default defineEventHandler((event) => {
  const {group1, group2, search, maxPrice} = getQuery(event);
  let filteredBeers = beers

  if (search) {
    const searchProperties = ['atvr_name', 'producer', 'country', 'taste_group1', 'taste_group2', 'seller']; // List of properties to search in
    
      filteredBeers = filteredBeers.filter(beer => {
      // Convert the search string to lowercase for case insensitivity
      const searchTerm = search.toLowerCase();
  
      // Iterate over each property in the searchProperties array
      for (const key of searchProperties) {
        // Check if the property exists in the beer object and if its value contains the search string
        if (beer.hasOwnProperty(key) && beer[key] && beer[key].toString().toLowerCase().includes(searchTerm)) {
          // If any property value contains the search string, return true to include the beer in the filtered list
          return true;
        }
      }

      // If no property value contains the search string, return false to exclude the beer from the filtered list
      return false;
    });
  }

  if(group1) {
    filteredBeers = filteredBeers.filter((beer) => {
      return beer.taste_group1 === group1 || group1 === 'Allar'
    })
  } 

  if(group2) {
    filteredBeers = filteredBeers.filter((beer) => {
      return beer.taste_group2 === group2 || group2 === 'Allar'
    })
  } 

  if(maxPrice) {
    filteredBeers = filteredBeers.filter((beer) => {
      return parseInt(beer.price) <= parseInt(maxPrice)
    })
  } 
  
  filteredBeers.sort(function(a, b){
    return (b.rating) - (a.rating);
  });

  return filteredBeers;
});