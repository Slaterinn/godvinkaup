<script setup>
const props = defineProps({
  posts: Array
});
</script>

<template>
  <div>
    <!-- Pass all posts to a single blogPost component -->
    <blogPost v-for= "post in posts" :key="post.id" :post="post"/>
  </div>
</template>



