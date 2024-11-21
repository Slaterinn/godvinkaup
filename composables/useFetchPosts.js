export default async () => {
  const {data, error, refresh} = await useFetch('/api/blogs/blog', {});

  
  if(error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch data"
    })
  }


  return {data, refresh};
};