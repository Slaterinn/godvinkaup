<script setup>
const route = useRoute();
const {data: posts} = await useFetchPosts({});
useHead({
  title: route.params.blogDetail
})

// Find the post matching the route param 'blogDetail'
const post = computed(() => {
  return posts.value.find((p) => p.name === route.params.blogDetail);
});
</script>



<template>
  <section>
    <div v-if="post" class="pt-[50px] pb-[50px] px-4 mx-auto max-w-screen-xl">
      <!-- Wine Name and rating-->
      <BlogDetailHeader :post="post"/>


      <div class="bg-[#4A4141] rounded-lg shadow-lg py-8 md:py-10 lg:py-12 px-8 md:px-16 lg:px-20 text-[#FFE7D4]">
        <!-- Image, Description, and Wine Attributes Section -->
        <BlogDetailCardHeader :post="post" />

        <!-- Wine Characteristics Section -->
        <BlogDetailCardAnalysis :post="post" />

      </div>
    </div>
  </section>
</template>