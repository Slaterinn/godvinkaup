<script setup>

useSeoMeta({
  title: 'Góð Vínkaup',
  ogTitle: 'Góð Vínkaup',
  description: 'Góð Vínkaup hjálpar þér að finna góð vín og bjór á betra verði.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góð vín og bjór á betra verði.',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/wine'
})
/*definePageMeta({
  layout: 'custom'
})*/

</script>

<template>
  <div>
    <LandingPageHero />
    <LandingProductCarousel/>
  </div>
</template>