<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/wine' },
         { rel: 'apple-touch-icon', href: '~/assets/images/touch_icon.png' }]
})

useSeoMeta({
  title: 'Vín',
  ogTitle: 'Vín',
  description: 'Góð Vínkaup hjálpar þér að finna góð vín á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góð vín á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/wine'
})

const route = useRoute();

const maxPrice  = computed(() => route.query.maxPrice)
const minPrice  = computed(() => route.query.minPrice)
const category  = computed(() => route.query.category)
const search    = computed(() => route.query.search)
const isOrganic = computed(() => route.query.isOrganic)
const wineCountry = computed(() => route.query.wineCountry)
const wineDistrict = computed(() => route.query.wineDistrict)

const {data: wines, refresh} = await useFetchWines({
  minPrice,
  maxPrice,
  category,
  search,
  isOrganic,
  wineCountry,
  wineDistrict
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