<script setup>
const props = defineProps({
  post: Object
})
</script>



<template>
  <section>
    <div class="pt-[150px] pb-[50px] px-4 mx-auto max-w-screen-xl text-center">
      <div class="flex flex-col md:flex-row justify-center items-center">
        <!-- Combined Div for Rating and Name -->
        <div class="flex items-center mb-4 md:mb-0">
          <!-- Rating Box with Adjusted Padding and Enlarged Text Size -->
          <span class="bg-[#a82548] text-[#FFE7D4] py-3 px-5 rounded-md font-bold text-2xl md:text-3xl lg:text-4xl mr-4 mb-2">
            {{ post.rating }}
          </span>

          <!-- Wine Name -->
          <div>
            <h1 class="text-5xl font-teko tracking-widest leading-none md:text-6xl lg:text-8xl text-[#FDA47E] dark:text-[#FDA47E] font-bold">
              {{ post.name }}
            </h1>
          </div>
        </div>
      </div>

      <!-- Enhanced Wine Type with Responsive Text Size -->
      <div class="mt-2">
        <p :class="`${props.post.wineColor}`" class="text-lg md:text-xl lg:text-2xl font-semibold text-[#FFE7D4]  inline-block">
          {{ post.wineTypeDetail }}
        </p>
      </div>
    </div>
  </section>
</template>
