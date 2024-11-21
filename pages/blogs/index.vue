<script setup>
  const {data: posts} = await useFetchPosts({});
</script>

<template>
  <div>
    <BlogJumbo />
    <blogPosts :posts="posts"/>
  </div>
</template>