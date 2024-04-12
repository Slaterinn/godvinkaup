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
    rating: '4.2',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Masso Antico Primitivo',
    img: 'https://images.vivino.com/thumbs/q8BUc8n8Qkivs11SxrXZqg_pb_x600.png',
    description: 'Búið til með appassimento þurrk-aðferðinni en það skilar sér þéttu víni dökkum lit og meira afgerandi bragði og ilm af svörtum skógarávöxtum og reyk. Ertu að fara að grilla í sól og 5 stiga hita? Gríptu þá þessa með og paraðu með grillkjötinu og þú verður ekki fyrir vonbrigðum!',
    seller: 'ÁTVR',
    price: '2.590 kr',
    grapes: 'Primitivo',
    country: 'Ítalía - Puglia',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=23603',
    link_vivino: 'https://www.vivino.com/US-CA/en/masso-antico-appassito-primitivo/w/5418496',
    rating: '4.1',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Big Boys Zinfandel',
    img: 'https://images.vivino.com/thumbs/CWH9WejMQVOPH53hnaOFMw_pb_x600.png',
    description: 'Á flöskumiðanum eru stórir strákar en þetta vín er ekki bara fyrir stóra stráka heldur alla. Silkimjúkt rauðvín þar sem eik blandast vel við bragð af rúsínum, súkkulaði/kaffi og lakkrís. Auðdrekkanlegt en í senn nokkuð flókið vín sem parast mjög vel pasta- og kjötréttum af ýmsu tagi.',
    seller: 'ÁTVR',
    price: '2.799 kr',
    grapes: 'Zinfandel',
    country: 'Ítalía - Puglia',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=24325',
    link_vivino: 'https://www.vivino.com/US-CA/en/big-boys-zinfandel/w/4401105',
    rating: '4.1',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Silk & Spice Red Blend',
    img: 'https://images.vivino.com/thumbs/uShQu12ZReOajbocNCabXQ_pb_x600.png',
    description: 'Ávaxtaríkt vín án þess þó að vera mjög sætt, heldur frekar í þurrari kantinum. Þetta er djarft vín með auðkennandi bragði af dökkum áxöxtum sem vega salt á móti þéttri áferð. Í hvert skipti sem þú tekur sopa þá finnurðu nýtt kryddbragð en þar má einkenna allt frá svörtum pipar yfir í appeslínubörk og kanil. Ekki verður það verra ef þú geymir það aðeins en það er erfitt að sitja á því eftir að hafa smakkað.',
    seller: 'ÁTVR',
    price: '2.599 kr',
    grapes: '40% Touriga Nacional, 20% Alicante Bouchet, 20% Baga, 20% Syrah',
    country: 'Portúgal',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25197',
    link_vivino: 'https://www.vivino.com/US-CA/en/silk-spice-red-blend/w/4843593',
    rating: '4.1',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Day One Carmenere',
    img: 'https://images.vivino.com/thumbs/el1n78g-RgOjLEheat2MRA_pb_x600.png',
    description: 'Gott Carmenere vín á góðu verði! Þroskaðir rauðir áxextir syngja hér forsönginn með bland af jurtatónum í bakröddum en það má jafnvel finna þarna aðeins keim af súkkulaði og kaffi. Þrátt fyrir þessa flóknu lýsingu er þetta vín nokkuð þægilegt og auðvelt að kynnast því.',
    seller: 'ÁTVR',
    price: '2.699 kr',
    grapes: 'Carmenere',
    country: 'Chile- Colchagua',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=28972',
    link_vivino: 'https://www.vivino.com/US-CA/en/montgras-day-one-carmenere/w/9823094',
    rating: '4.0',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'}]



  const items2 = [{
    name: 'Quattronotti Appassimento Negroamaro',
    img: 'https://images.vivino.com/thumbs/Cu-HZ2XwR8evPLwpoR1kkA_pb_x600.png',
    description: 'Dökkkirsuberjarautt, þétt og mikið vín frá Puglia á Ítalíu. Vínið 100% úr negroamaro þrúgunni sem gefur því ekki bara dökkan lit heldur bragð af brómberjum og þurrkuðu kryddi eins og blóðbergi.',
    seller: 'ÁTVR',
    price: '3.716 kr',
    grapes: 'Negroamaro 100%',
    country: 'Ítalía',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'The Chocolate Block',
    img: 'https://images.vivino.com/thumbs/jQ-ODF_jRpuqCxlRytxYLw_pb_x600.png',
    description: 'Skemmtilegt vín frá Suður-Afríku með undirliggjandi kryddbragð og rifsberjakeim. Vín með mikið body og eftirbragð sem situr lengi eftir. Hentar vel með rauðu kjöti.',
    seller: 'ÁTVR',
    price: '3.995 kr',
    grapes: 'Syrah 73%, Grenache 11%, Cinsault 8%, Cabernet Sauvignon 7%, Viognier 1%',
    country: 'Suður-Afríka',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: '2011 Viña Bosconia Tinto Reserva',
    img: 'https://images.vivino.com/thumbs/eDyHmY-EQcG28_Ezlpgq5A_pb_x600.png',
    description: 'Þetta vín hefur yfir meira en áratug þróast yfir í djúpan rauðan lit með örlítilli appelsínugulu. Lyktin ber með sér ágenga ávexti og bragðið er þétt, mjúkt og fínt (þetta er ekki lýsing á rúminu mínu)',
    seller: 'Sante',
    price: '4.900 kr',
    grapes: 'Tempranillo 80%, Garnacha 15%, Mazuelo 3%, Graciano 2%.',
    country: 'Spánn',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }
  , {
    name: '2011 Viña Bosconia Tinto Reserva',
    img: 'https://images.vivino.com/thumbs/el1n78g-RgOjLEheat2MRA_pb_x600.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    seller: 'Sante',
    price: '4.900 kr',
    grapes: 'Tempranillo 80%, Garnacha 15%, Mazuelo 3%, Graciano 2%.',
    country: 'Spánn',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }]

  const props = defineProps({
  wines: Array
})


</script>

<template>
<div class="flex justify-center items-center py-20">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class=" font-teko tracking-wider mb-7 text-[#FDA47E]">
      <h3 class="text-4xl md:text-5xl">Frábær kaup undir 3.000 kr:</h3>
      <p>Aðgengileg vín á góðu verði sem fást víða.</p>
    </div>
    <UCarousel v-slot="{ item }" :items="items1" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-3 sm:p-[5%] ">
      <img title="Highlighted_product" :src="item.img" :alt="item.name" draggable="false" loading="lazy" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="flex flex-col p-5">
        <div class="grid grid-cols-1 gap-3 lg:gap-5">
          <p class="text-xl" :class="`${item.wineColor}`">{{item.wineType}}</p>
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
          <a :href="item.link_store" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#2A2424] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{item.seller}}</a>
          <a :href="item.link_vivino" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>
    </UCarousel>
  </div>
</div>

<!--<div class="flex justify-center items-center py-20 bg-[#2A2424]">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class="text-4xl md:text-5xl font-teko tracking-wider mb-7  text-[#FDA47E]">
      <h3>Nokkur skemmtileg:</h3>
    </div>
    <UCarousel v-slot="{ item }" :items="items2" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-3 sm:p-[5%] ">
      <img title="Highlighted_product" :src="item.img" :alt="item.name" draggable="false" loading="lazy"  class="w-auto max-h-[70vh] md:max-h-full">
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
          <a :href="item.link_store" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#2A2424] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{item.seller}}</a>
          <a :href="item.link_vivino" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>
    </UCarousel>
  </div>
</div> -->
</template>