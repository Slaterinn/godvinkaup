<script setup>
const props = defineProps({
  post: Object
});

// Function to limit description to a set number of characters
const truncatedDescription = computed(() => {
  const maxLength = 150; // Adjust this value to control the preview length
  return props.post.description.length > maxLength
    ? props.post.description.slice(0, maxLength) + '...'
    : props.post.description;
});
</script>

<!--<template>
  <div class="flex justify-center items-center py-20">
    <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
      <div class="font-teko tracking-wider mb-7 text-[#FDA47E]">
        <h3 class="text-4xl md:text-3xl"
        @click="navigateTo(`/blogs/${post.name}`)"
        >{{ post.name }}</h3>
      </div>
    </div>
  </div>
</template> -->


<template>
  <div 
    class="bg-[#3E3737] text-[#FFE7D4] hover:bg-[#554C4A] rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto transition-transform transform hover:-translate-y-1 cursor-pointer flex items-center space-x-4 mb-6"
    @click="navigateTo(`/blogs/${props.post.name}`)"
  >
    <!-- Image thumbnail on the left without shadow -->
    <div class="w-20 h-32 overflow-hidden rounded-lg flex-shrink-0">
      <img 
        :src="props.post.img" 
        alt="Post image"
        class="object-contain w-full h-full"
      />
    </div>

    <!-- Main content on the right -->
    <div class="flex-grow">
      <!-- Group/category label 
      <p class="text-sm text-[#FDA47E] font-semibold uppercase tracking-wider mb-1">
        {{ props.post.group }}
      </p>-->

      <div class="font-teko tracking-wide mb-2 text-[#FDA47E]">
        <h3 class="text-3xl md:text-4xl">{{ props.post.name }}</h3>
      </div>
      <p class="text-[#FFE7D4] text-lg leading-relaxed">{{ truncatedDescription }}</p>
      <!-- Display wine type with dynamic color -->
      <p v-if="post.wineType" :class="`${props.post.wineColor}`" class="text-lg font-bold mt-2">
        {{ props.post.wineType }}
      </p>
    </div>
  </div>
</template>


<style scoped>
/* Add hover effect for title color */
h3:hover {
  color: #9A787A;
}
</style>