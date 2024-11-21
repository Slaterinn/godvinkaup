<script setup>
const props = defineProps({
  post: Object
});
</script>


<!-- WineImageDescription.vue -->
<template>
  <div class="flex flex-col md:flex-row items-center gap-8">

    <!-- Image Section -->
    <img :src="post.img" alt="Wine Image" class="w-25 h-auto rounded-md">

    <!-- Description and Attributes Section -->
    <div class="flex flex-col">
      <!-- Recommendation -->
      <div class="mt-20 mb-10 bg-[#3E3737] p-4 rounded-lg border-l-4 border-[#FDA47E]">
        <h2 class="text-xl font-semibold text-[#FDA47E] mb-2">Fyrir hverja?</h2>
        <p class="text-base">{{ post.recommendation }}</p>
      </div>
      <!-- Description Paragraph -->
      <p class="text-lg text-justify font-normal leading-relaxed md:px-4">{{ post.description }}</p>

      <!-- Wine Attributes -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
        <div class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Söluaðili:</span> {{ post.seller }}
        </div>
        <div class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Verð:</span> {{ post.price }}
        </div>
        <div class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Þrúgur:</span> {{ post.grapes }}
        </div>
        <div class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Land:</span> {{ post.country }}
        </div>
        <div class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Vivino einkunn:</span> {{ post.rating }}
        </div>
        <div v-if="post.area" class="p-4 rounded-lg bg-[#3A3333] shadow-sm">
          <span class="font-semibold text-[#FDA47E]">Svæði:</span> {{ post.area }}
        </div>
      </div>

    </div>
  </div>
</template>