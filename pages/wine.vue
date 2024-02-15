<script setup>
useHead({
  title: "Vín",
});

const route = useRoute();

const maxPrice  = computed(() => route.query.maxPrice)
const minPrice  = computed(() => route.query.minPrice)
const category  = computed(() => route.query.category)
const search    = computed(() => route.query.search)

const {data: wines, refresh} = await useFetchWines({
  minPrice,
  maxPrice,
  category,
  search,
});

watch(
  () => route.query, 
  () => refresh()
);



</script>

<template>
  <div>
    <wineJumbo />
    <wineFilters />
    <wineCards :wines="wines"/>
  </div>
</template>