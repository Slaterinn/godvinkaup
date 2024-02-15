<script setup>
//const {wines} = useWines()

const props = defineProps({
  wines: Array
})
</script>

<template>
  <div>
    <wineCard v-for="wine in wines" :key="wine.pk_wine" :wine="wine" :link_vivino="wine.link_vivino" :link_store="wine.link"/>
  </div>
</template>