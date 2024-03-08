<script setup>


const props = defineProps({
  beers: Array
})
</script>

<template>
  <div>
    <beerCard v-for="beer in beers" :key="beer.pk_beer" :beer="beer" :link_untappd="beer.untappd_url" :link_store="beer.atvr_url"/>
  </div>
</template>