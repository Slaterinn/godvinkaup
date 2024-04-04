<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/beer' },
         { rel: 'apple-touch-icon', href: '~/assets/images/godvinkaup_round.png' }]
})

useSeoMeta({
  title: 'Bjór',
  ogTitle: 'Bjór',
  description: 'Góð Vínkaup hjálpar þér að finna góðan bjór á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góðan bjór á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/beer'
})

const route = useRoute();

const maxPrice  = computed(() => route.query.maxPrice)
const group1    = computed(() => route.query.group1)
const group2    = computed(() => route.query.group2)
const search    = computed(() => route.query.search)

const {data: beers, refresh} = await useFetchBeers({
  maxPrice,
  group1,
  group2,
  search,
});

watch(
  () => route.query, 
  () => refresh()
);
</script>

<template>
  <beerJumbo />
  <beerFilters />
  <beerCards :beers="beers"/>
</template>