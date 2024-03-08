<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/beer' }],
})

useSeoMeta({
  title: 'Bjór',
  ogTitle: 'Bjór',
  description: 'Góð Vínkaup hjálpar þér að finna góðan bjór á betra verði.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góðan bjór á betra verði.',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/beer'
})


const {data: beers} = await useFetchBeers({

});
</script>

<template>
  <beerJumbo />
  <beerCards :beers="beers"/>
</template>