<script setup lang="ts">

  const items1 = [{
    name: 'Mucho mas tinto',
    img: 'https://images.vivino.com/thumbs/nMRl6FutRX26zFRR1iqtqQ_pb_x600.png',
    description: 'Ávaxtaríkt en samt djúprautt vín frá fjölskyldufyrirtækinu Félix Solís. Þetta vín nær jafnvægi á milli þess að vera þurrt og sætt en það má búast við því að finna keim af vanillu, eik og tóbaki auk þess hefur það sætan keim af rauðum kirsuberjum og plómu.',
    seller: 'ÁTVR',
    price: '2.599 kr',
    grapes: 'Shiraz/Syrah, Tempranillo',
    country: 'Spánn'
  }, {
    name: 'Marlborough sun',
    img: 'https://images.vivino.com/thumbs/HUd1YqCsQjS657o-rAtXJg_pb_x600.png',
    description: 'Þurrt og súrt hvítvín sem hefur ferskan ávaxtailm og bragð af sítrus, greip og ástaraldin.',
    seller: 'ÁTVR',
    price: '2.799 kr',
    grapes: 'Sauvignon Blanc',
    country: 'Nýja-Sjáland'
  }, {
    name: 'Torre Mora Scalunera Etna Rosato',
    img: 'https://images.vivino.com/thumbs/SWRDzZF1RWyMhSPMdyAcMA_pb_x600.png',
    description: 'Óvænt en kærkomin hlýja og krydd einkenna lyktina af þessu fölbleika rósavíni sem hefur bragð af sítrusávöxtum í bland við málm- og saltkeim. ',
    seller: 'ÁTVR',
    price: '3.499 kr',
    grapes: 'Nerello Mascalese',
    country: 'Ítalía'
  }]



  const items2 = [{
    name: 'Quattronotti Appassimento Negroamaro',
    img: 'https://images.vivino.com/thumbs/Cu-HZ2XwR8evPLwpoR1kkA_pb_x600.png',
    description: 'Dökkkirsuberjarautt, þétt og mikið vín frá Puglia á Ítalíu. Vínið 100% úr negroamaro þrúgunni sem gefur því ekki bara dökkan lit heldur bragð af brómberjum og þurrkuðu kryddi eins og blóðbergi.',
    seller: 'ÁTVR',
    price: '3.716 kr',
    grapes: 'Negroamaro 100%',
    country: 'Ítalía'
  }, {
    name: 'The Chocolate Block',
    img: 'https://images.vivino.com/thumbs/jQ-ODF_jRpuqCxlRytxYLw_pb_x600.png',
    description: 'Skemmtilegt vín frá Suður-Afríku með undirliggjandi kryddbragð og rifsberjakeim. Vín með mikið body og eftirbragð sem situr lengi eftir. Hentar vel með rauðu kjöti.',
    seller: 'ÁTVR',
    price: '3.995 kr',
    grapes: 'Syrah 73%, Grenache 11%, Cinsault 8%, Cabernet Sauvignon 7%, Viognier 1%',
    country: 'Suður-Afríka'
  }, {
    name: '2011 Viña Bosconia Tinto Reserva',
    img: 'https://images.vivino.com/thumbs/eDyHmY-EQcG28_Ezlpgq5A_pb_x600.png',
    description: 'Þetta vín hefur yfir meira en áratug þróast yfir í djúpan rauðan lit með örlítilli appelsínugulu. Lyktin ber með sér ágenga ávexti og bragðið er þétt, mjúkt og fínt (þetta er ekki lýsing á rúminu mínu)',
    seller: 'Sante',
    price: '4.900 kr',
    grapes: 'Tempranillo 80%, Garnacha 15%, Mazuelo 3%, Graciano 2%.',
    country: 'Spánn'
  }]

  const props = defineProps({
  wines: Array
})


</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class="text-2xl font-montserrat mb-10 text-center text-[#FDA47E]">
      <h3>Verður að prófa</h3>
    </div>
    <UCarousel v-slot="{ item }" :items="items1" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-1 md:p-[5%]">
      <img :src="item.img" :alt="item.name" draggable="false" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="grid grid-cols-1 gap-3">
        <h2 class="text-5xl font-medium">{{ item.name }}</h2>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.seller }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">SÖLUAÐILI</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.price }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">VERÐ</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">Ítalía</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">LAND</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">4.2</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">EINKUNN</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.grapes }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">ÞRÚGUR</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.description }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">LÝSING</span>
          </div>
        </div>
      </div>
    </UCarousel>
  </div>
</div>

<div class="min-h-screen flex justify-center items-center">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class="text-2xl font-montserrat mb-10 text-center text-[#FDA47E]">
      <h3>Verður að prófa</h3>
    </div>
    <UCarousel v-slot="{ item }" :items="items2" :ui="{ item: 'basis-full' }" arrows class="bg-[#FFE7D4] rounded-lg p-1 md:p-[5%]">
      <img :src="item.img" :alt="item.name" draggable="false" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="grid grid-cols-1 gap-3">
        <h2 class="text-5xl font-medium">{{ item.name }}</h2>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.seller }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">SÖLUAÐILI</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.price }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">VERÐ</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">Ítalía</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">LAND</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">4.2</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">EINKUNN</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.grapes }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">ÞRÚGUR</span>
          </div>
        </div>
        <div>
          <div>
            <span class="text-md text-xl">{{ item.description }}</span>
          </div>
          <div>
            <span class="text-md text-lg text-[#7a7a7a]">LÝSING</span>
          </div>
        </div>
      </div>
    </UCarousel>
  </div>
</div>
</template>