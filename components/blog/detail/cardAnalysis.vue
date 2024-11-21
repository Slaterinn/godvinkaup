<script setup>
const props = defineProps({
  post: Object
});
</script>


<!-- WineCharacteristics.vue -->
<template>
  <div class="mt-20 md:ml-5">
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-2 text-[#FDA47E]">Matarpörun</h2>
      <p class="text-base mb-4">
        {{ post.food_pairing }}
      </p>
    </div>
    
      
    
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-2 text-[#FDA47E]">Einkenni og samsetning</h2>
      <p class="text-base mb-4">
        {{ post.detail_intro }}
      </p>
    </div>

    <!-- Progress Bars for Wine Characteristics -->
    <div class="mt-8 space-y-4">
      <div v-if="post.boldness">
        <div class="w-full bg-[#FFE7D4] rounded-full h-3.5 dark:bg-gray-700">
          <div class="bg-[#819b78] h-3.5 rounded-full" :style="{ width: `${post.boldness_grade}%` }"></div>
        </div>
        <span class="block mb-1">{{ post.boldness }}</span>
      </div>
      <div v-if="post.dryness">
        <div class="w-full bg-[#FFE7D4] rounded-full h-3.5 dark:bg-gray-700">
          <div class="bg-[#819b78] h-3.5 rounded-full" :style="{ width: `${post.dryness_grade}%` }"></div>
        </div>
        <span class="block mb-1">{{ post.dryness }}</span>
      </div>
      <div v-if="post.sourness">
        <div class="w-full bg-[#FFE7D4] rounded-full h-3.5 dark:bg-gray-700">
          <div class="bg-[#819b78] h-3.5 rounded-full" :style="{ width: `${post.sourness_grade}%` }"></div>
        </div>
        <span class="block mb-1">{{ post.sourness }}</span>
      </div>
      <div v-if="post.tannin">
        <div class="w-full bg-[#FFE7D4] rounded-full h-3.5 dark:bg-gray-700">
          <div class="bg-[#819b78] h-3.5 rounded-full" :style="{ width: `${post.tannin_grade}%` }"></div>
        </div>
        <span class="block mb-1">{{ post.tannin }}</span>
      </div>
    </div>
    
    <div class="flex flex-col gap-6 mt-10">
      <div 
        v-for="grape in post.grape_details" 
        :key="grape.name" 
        class="p-6 rounded-md shadow-lg bg-[#FFE7D4]"
      >
        <!-- Grape Name -->
        <h3 class="text-2xl font-bold text-[#a82548] mb-4">{{ grape.name }}</h3>
        
        <!-- Flavor at the Top -->
        <div class="mb-4 p-4text-[#FFE7D4]">
          <p class="text-base text-gray-700 text-semibold">{{ grape.flavor }}</p>
        </div>

        <!-- Other Attributes in a Grid Layout -->
        <div class="grid gap-4 sm:grid-cols-2">
          <!-- Loop through the remaining attributes -->
          <div 
            v-for="(attribute, key) in grape.attributes" 
            :key="key" 
            class="space-y-1"
          >
            <h4 class="text-lg font-semibold text-[#819b78]">{{ attribute.name }}</h4>
            <p class="text-base text-gray-700">{{ attribute.text }}</p>
          </div>
        </div>
      </div>
      <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="post.link_store" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E]">{{ post.seller }}</a>
          <a :href="post.link_vivino" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
    </div>

  </div>
</template>