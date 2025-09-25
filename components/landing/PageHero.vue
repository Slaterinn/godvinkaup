<template>
  <div class="relative h-dvh w-full bg-no-repeat bg-cover bg-bottom bg-[url('~/assets/images/background.jpg')]">
    <!-- Overlay for dark tint -->
    <div class="absolute inset-0 bg-black opacity-50 z-0"></div>

    <!-- Hero content -->
    <div class="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-0"
         style="position: absolute; top: 33%; left: 50%; transform: translateX(-50%); width: 100%; max-width: 800px;">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat mb-6 text-white">
        Gerðu alltaf góð vínkaup
      </h1>
      <p class="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-teko text-white">
        Segðu VínAndanum hvað þú vilt..
      </p>

      <!-- Hero buttons 
      <div class="mt-8 flex justify-center gap-x-4 sm:gap-x-6 flex-wrap">
        <a href="/wine"
           class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-montserrat font-medium text-lg sm:text-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded">
          Finna vín
        </a>
        <a href="/blogs"
           class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-montserrat font-medium text-lg sm:text-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded">
          Stækkunarglerið
        </a>
      </div>-->

      <!-- Search bar -->
      <div class="mt-8 relative w-full">
        <input
          v-model="query"
          @keyup.enter="search"
          class="w-full border p-3 rounded text-lg sm:text-xl text/90 italic"
          placeholder="Rauðvín með steik undir 5000..."
        />

        <!-- Search results overlay -->
        <div
          v-if="results.length || loading || message"
          class="absolute left-0 right-0 mt-2 max-h-96 overflow-y-auto 
                bg-[#FFE7D4] text-[#302A2A] 
                dark:bg-[#302A2A] dark:text-[#FFE7D4] 
                rounded-lg shadow-lg z-50"
        >
          <div v-if="loading" class="text-gray-500 animate-pulse p-4">Hugsar...</div>
          <div v-else-if="message" class="text-red-600 p-4">{{ message }}</div>
          <div v-else>
            <div
              v-for="(r, i) in results"
              :key="i"
              class="border-b last:border-b-0 py-2 px-4 text-left flex items-start gap-4"
            >
              <!-- Wine image -->
              <img
                v-if="r.image_url"
                :src="r.image_url"
                alt="Wine image"
                class="w-16 h-16 object-cover rounded"
              />

              <div class="flex-1">
                <!-- Wine name -->
                <p class="font-bold">{{ r.wine_name }}</p>

                <!-- Producer, category, rating -->
                <p class="text-sm text-gray-700">
                  {{ r.producer }} – {{ r.category }} – {{ r.rating }} ({{ r.rating_count }} endurgjafir)
                </p>

                <!-- Price -->
                <p v-if="r.price" class="text-sm text-gray-900 font-medium mt-1">
                  Verð: {{ r.price }} kr.
                </p>

                <!-- Links -->
                <p class="mt-1">
                  <a :href="r.seller_url" target="_blank" class="text-blue-600 underline mr-4">{{ r.seller}}</a>
                  <a :href="r.vivino_url" target="_blank" class="text-green-600 underline">Vivino</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Hero scroll indicator 
    <div class="absolute bottom-5 w-full flex flex-col items-center text-[#ACAC9A]">
      <p class="text-2xl md:text-3xl mx-auto">Sérstök meðmæli</p>
      <UIcon name="i-heroicons-arrow-small-down-solid" class="text-4xl md:text-6xl mx-auto"/>
    </div>-->
  </div>
</template>




<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const loading = ref(false)
const results = ref<any[]>([])
const message = ref('')

// Example search function — replace with your real API call
const search = async () => {
  if (!query.value.trim()) return
  loading.value = true
  results.value = []
  message.value = ''

  try {
    const res = await fetch('/api/wine-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query.value }),
    })
    const data = await res.json()
    if (data.results) results.value = data.results
    else if (data.result) message.value = data.result
    else message.value = 'Ekkert fannst.'
  } catch (err) {
    console.error(err)
    message.value = 'Villa við að ná í vín 🥂'
  } finally {
    loading.value = false
  }
}
</script>
