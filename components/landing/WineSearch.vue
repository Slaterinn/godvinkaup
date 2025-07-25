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

    if (data.results) {
      results.value = data.results;
    } else if (data.result) {
      message.value = data.result;
    } else {
      message.value = 'Something went wrong.';
    }
  } catch (err) {
    console.error(err);
    message.value = 'Error talking to wine brain 🍷';
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
      placeholder="Ask about wine..."
    />
    <button @click="search" class="bg-red-500 text-white px-4 py-2 rounded">
      Spurðu um meðmæli
    </button>

    <div v-if="loading" class="mt-4 text-gray-500 animate-pulse">
      Hugsar...
    </div>

    <div v-if="message && !loading" class="mt-4 text-red-600">
      {{ message }}
    </div>

    <div v-if="results.length && !loading" class="mt-4 space-y-2">
      <div v-for="(r, i) in results" :key="i" class="p-4 border rounded">
        <p><strong>{{ r.wine_name }}</strong> – {{ r.producer }}</p>
        <p>Rating: {{ r.rating }} ({{ r.rating_count }} votes)</p>
      </div>
    </div>
  </div>
</template>
