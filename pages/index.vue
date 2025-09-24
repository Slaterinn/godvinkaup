<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/' },
         { rel: 'apple-touch-icon', href: '~/assets/images/touch_icon.png' }]
})
useSeoMeta({
  title: 'Gerðu bara góð vínkaup',
  ogTitle: 'Gerðu bara góð vínkaup',
  description: 'Góð Vínkaup hjálpar þér að finna góð vín og góðan bjór á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
  ogDescription: 'Góð Vínkaup hjálpar þér að finna góð vín og góðan bjór á betra verði með tengingum við þekkt forrit fyrir endurgjöf.',
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