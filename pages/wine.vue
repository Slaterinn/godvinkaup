<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/wine' }],
  link: [{ rel: 'apple-touch-icon', href: '~/assets/images/touch_icon.png' }],
})

useSeoMeta({
  title: 'Vín',
  ogTitle: 'Vín',
  description: 'Góð Vínkaup hjálpar þér að finna góð vín á betra verði.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góð vín á betra verði.',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/wine'
})

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