<script setup lang="ts">

  const items1 = [{
    name: 'Mucho mas tinto',
    img: 'https://images.vivino.com/thumbs/nMRl6FutRX26zFRR1iqtqQ_pb_x600.png',
    description: 'Ávaxtaríkt en samt djúprautt vín frá fjölskyldufyrirtækinu Félix Solís á Spáni. Þetta vín nær jafnvægi á milli þess að vera þurrt og sætt en það má búast við því að finna keim af vanillu, eik og tóbaki auk þess hefur það sætan keim af rauðum kirsuberjum og plómu. Allt mjög einkennandi fyrir Tempranillo þrúguna en þarna er búið að blanda þeim saman við Syrah sem svona gefur því aukið flækjustig og dekkri lit.',
    seller: 'ÁTVR',
    price: '2.599 kr',
    grapes: 'Shiraz/Syrah, Tempranillo',
    country: 'Spánn',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25431/',
    link_vivino: 'https://www.vivino.com/US-CA/en/felix-solis-valdepenas-mucho-mas-tinto/w/6266660',
    rating: '4.2'
  }, {
    name: 'Marlborough sun',
    img: 'https://images.vivino.com/thumbs/HUd1YqCsQjS657o-rAtXJg_pb_x600.png',
    description: 'Þurrt, frekar létt og súrt Sauvignon Blanc hvítvín frá Nýja-Sjálandi sem hefur ferskan ávaxtailm og bragð af sítrus, greip og ástaraldin. Parast vel með skelfisk og grænmetisréttum.',
    seller: 'ÁTVR',
    price: '2.799 kr',
    grapes: 'Sauvignon Blanc',
    country: 'Nýja-Sjáland',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=29580/',
    link_vivino: 'https://www.vivino.com/US/en/marlborough-sun-sauvignon-blanc-marlborough/w/1624286',
    rating: '4.3'
  }, {
    name: 'Torre Mora Scalunera Etna Rosato',
    img: 'https://images.vivino.com/thumbs/SWRDzZF1RWyMhSPMdyAcMA_pb_x600.png',
    description: 'Nerello Mascalese þrúgan er ræktuð í hlíðum sisiliska eldfjallsins Etna og er stundum líkt við Pinot Noir. Hún býður upp á ávaxtabragð, t.d. jarðaber og kirsuber og er frekar ljós að lit með nokkra sýru. Það væri sniðugt að segja að óvænt hlýja vínsins væri endurspeglun á eldfjallinu sem þrúgan er ræktuð við en það væri aðeins of lúðalegt.',
    seller: 'ÁTVR',
    price: '3.499 kr',
    grapes: 'Nerello Mascalese',
    country: 'Ítalía',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25547/',
    link_vivino: 'https://www.vivino.com/US-CA/en/torre-mora-etna-scalunera-etna-rosato-etna/w/6326655',
    rating: '4.1'
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
  }
  , {
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
<div class="flex justify-center items-center py-20">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class=" font-teko tracking-wider mb-7 text-[#FDA47E]">
      <h3 class="text-4xl md:text-5xl">Bestu kaupin:</h3>
      <p>Hæstu einkunnir miðað við verð af hverri víntegund</p>
    </div>
    <UCarousel v-slot="{ item }" :items="items1" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-3 sm:p-[5%] ">
      <img :src="item.img" :alt="item.name" draggable="false" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="flex flex-col p-5">
        <div class="grid grid-cols-1 gap-3 lg:gap-5">
          <h2 class="text-4xl md:text-5xl font-medium">{{ item.name }}</h2>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.description }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">LÝSING</span>
            </div>
          </div>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.price }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">VERÐ</span>
            </div>
          </div>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.rating }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">EINKUNN</span>
            </div>
          </div>
        </div>
        <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="item.link_store" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#2A2424] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{item.seller}}</a>
          <a :href="item.link_vivino" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>
    </UCarousel>
  </div>
</div>

<div class="flex justify-center items-center py-20 bg-[#2A2424]">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class="text-4xl md:text-5xl font-teko tracking-wider mb-7  text-[#FDA47E]">
      <h3>Nokkur skemmtileg:</h3>
    </div>
    <UCarousel v-slot="{ item }" :items="items2" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-3 sm:p-[5%] ">
      <img :src="item.img" :alt="item.name" draggable="false" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="flex flex-col p-5">
        <div class="grid grid-cols-1 gap-3 lg:gap-5">
          <h2 class="text-5xl font-medium">{{ item.name }}</h2>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.description }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">LÝSING</span>
            </div>
          </div>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.price }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">VERÐ</span>
            </div>
          </div>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.rating }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">EINKUNN</span>
            </div>
          </div>
        </div>
        <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="item.link_store" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#2A2424] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{item.seller}}</a>
          <a :href="item.link_vivino" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>
    </UCarousel>
  </div>
</div>
</template>