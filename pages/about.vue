<script setup>
useHead({
  htmlAttrs: {lang: 'is'},
  link: [{ rel: 'canonical', href: 'https://godvinkaup.is/about' },
         { rel: 'apple-touch-icon', href: '~/assets/images/touch_icon.png' }]
})

useSeoMeta({
  title: 'Um Góð Vínkaup',
  ogTitle: 'Um Góð Vínkaup',
  description: 'Hvers vegna góð vínkaup? Hvernig varð síðan til og hvernig eru gögnin sótt?',
  ogDescription: 'Hvers vegna góð vínkaup? Hvernig varð síðan til og hvernig eru gögnin sótt?',
  ogImage: '~/assets/images/background.jpg',
  ogLocale: 'is-IS',
  ogUrl: 'https://godvinkaup.is/about'
})
</script>
<template>
  <AboutJumbo />
</template>