export default async (filters) => {
  const {data, error, refresh} = await useFetch('/api/beers/beer', {
    params: {
      ...filters,
    },
  });

  
  if(error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch data"
    })
  }


  return {data, refresh};
};