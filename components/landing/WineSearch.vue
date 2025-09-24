<script setup lang="ts">
import { ref } from 'vue';

const query = ref('');
const loading = ref(false);
const results = ref<any[]>([]);
const message = ref('');

const search = async () => {
  if (!query.value.trim()) return;
  loading.value = true;
  results.value = [];
  message.value = '';

  try {
    const res = await fetch('/api/wine-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query.value }),
    });

    const data = await res.json();

    if (data.results && data.results.length) {
      results.value = data.results;
    } else if (data.message) {
      message.value = data.message;
    } else {
      message.value = 'Eitthvað fór úrskeiðis.';
    }
  } catch (err) {
    console.error(err);
    message.value = 'Vínandinn er e-ð slappur í dag 🍷';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="p-4 max-w-xl mx-auto">
    <input
      v-model="query"
      @keyup.enter="search"
      class="w-full border p-2 rounded mb-4"
      placeholder="Rauðvín með pasta undir 4000..."
    />
    <button @click="search" class="bg-red-500 text-white px-4 py-2 rounded">
      Fá meðmæli
    </button>

    <div v-if="loading" class="mt-4 text-gray-500 animate-pulse">
      Hugsar...
    </div>

    <div v-if="message && !loading" class="mt-4 text-red-600">
      {{ message }}
    </div>

    <div v-for="(r, i) in results" :key="i" class="p-4 border rounded">
      <p><strong>{{ r.wine_name }}</strong> – {{ r.producer }}</p>
      <p>Category: {{ r.category }}</p>
      <p>Rating: {{ r.rating }} ({{ r.rating_count }} votes)</p>
      <p>Seller: {{ r.seller }} | Price: {{ r.price }} kr.</p>
      <p>
        <a :href="r.seller_url" target="_blank" class="text-blue-600 underline mr-4">Seller</a>
        <a :href="r.vivino_url" target="_blank" class="text-green-600 underline">Vivino</a>
      </p>
    </div>
  </div>
</template>
