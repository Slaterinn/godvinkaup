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
    description: 'Búið til með appassimento þurrk-aðferðinni en það skilar sér þéttu víni, dökkum lit og meira afgerandi bragði og ilm af svörtum skógarávöxtum og reyk. Ertu að fara að grilla í sól og 5 stiga hita? Gríptu þá þessa með og paraðu með grillkjötinu og þú verður ekki fyrir vonbrigðum!',
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
    name: 'Antieri susumaniello',
    img: 'https://images.vivino.com/thumbs/-cl2YA2cSAO65wUQPKsmuw_pb_x600.png',
    description: 'Kröftugt og ríkt rautt vín sem ber með sér kraftmikinn ilm og bragð og kryddaðri plómusultu með negul og tóbaki. Þétt ávaxtabragðið fær faðmlag frá fíngerðu tanníni og kanill kyssir það bless. Þetta er eiginlega rosalegt vín og það verður að fá að anda í góðan tíma til að losa um epískt bragðið.',
    seller: 'ÁTVR',
    price: '4.494 kr',
    grapes: 'Susumaniello',
    country: 'Ítalía - Puglia',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=29650',
    link_vivino: 'https://www.vivino.com/US-CA/en/schola-sarmenti-antieri-susumaniello/w/5424453',
    rating: '4.3',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Reserva XR',
    img: 'https://images.vivino.com/thumbs/B16FOepaS1aO5WPtys9Hdg_pb_x600.png',
    description: 'Djúpkirsuberjarautt vín með skærum blæ á brún. Ekki ósvipað góðum Bordeaux-vínum er þetta vín örlítið lokað til að byrja með en opnar sig þegar þú færð að kynnast því. Reyktur og kryddaður ilmur af múskati og kanil kemur fljótt í ljós ásamt lakkrís og bláberjum. Í lokin er ekki fráleitt að finna snefil af balsamik. Vín sem þú verður hreinlega að prófa!',
    seller: 'ÁTVR',
    price: '4.999 kr',
    grapes: 'Tempranillo, Graciano',
    country: 'Spánn - Rioja',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=29493',
    link_vivino: 'https://www.vivino.com/US-CA/en/marques-de-riscal-rioja-reserva-xr/w/7388608',
    rating: '4.3',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Cornas Hypsos',
    img: 'https://images.vivino.com/thumbs/m8amIn1kQ5CGLLUXMQEOxQ_pb_x600.png',
    description: 'Dökkur, ógagnsær, næstum svartrauður litur tekur á sig fjólubláan blæ meðan það er ungt en breytist í gulbrúna tóna með aldrinum. Vínið er sannkölluð sprenging af rauðum ávöxtum í nefi en býður uppá fínlegan blóma- og ákafan piparkeim. Ég get fátt fleira útskýrt - kauptu þér flösku hjá Sante, smakkaðu, gefðu vinum og njóttu.',
    seller: 'Sante',
    price: '3.800 kr',
    grapes: 'Syrah',
    country: 'Frakkland - Rhone',
    link_store: 'https://sante.is/products/2018-domaine-mucyn-cornas-cuvee-hypsos',
    link_vivino: 'https://www.vivino.com/US-CA/en/mucyn-cornas-hypsos/w/10617154',
    rating: '4.2',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }
  , {
    name: 'The Bernard Series Pinotage',
    img: 'https://images.vivino.com/thumbs/W_Aae_RVR8uMSSLNkq3plw_pb_x600.png',
    description: 'Settu nefið að glasinu og það grípur þig afbragðsilmur af sólberjum, hindberjum og kirsuberjum. Hallaðu þér aftur og hugsaðu hvað lífið er gott. Fáðu þér sopa og finndu fullt, þurrt og hóflega sýrt vínið leika um munninn. Kyngdu svo og mundu að þetta er bara vín og það eru allir að horfa á þig. En þetta er frábært vín!',
    seller: 'ÁTVR',
    price: '3.999 kr',
    grapes: 'Pinotage',
    country: 'Suður Afríka',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=28880',
    link_vivino: 'https://www.vivino.com/US-CA/en/za-bellingham-the-bernard-series-bush-vine-limited-release-pinotage/w/7319906',
    rating: '4.2',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'
  }, {
    name: 'Barahonda Summum',
    img: 'https://images.vivino.com/thumbs/rAAgKLNZQ4WSgLR6IS5bKw_pb_x600.png',
    description: 'Spænska Monstrell þrúgan hefur þykkt skinn sem gefur af sér dökk vín með öflug tannín og dáleiðandi dýpt. Hér höfum við vín sem sest að í munninum, húðar hann jafnvel. Hér finnum við fyrir sykurkenndum ávöxtum eins og kirskuberjum og plómum. Þetta er ákveðið vín með karakter og það mun svo sannarlega ekki versna með aldrinum.',
    seller: 'ÁTVR',
    price: '4.499 kr',
    grapes: 'Monastrell',
    country: 'Spánn- Murcia',
    link_store: 'https://www.vinbudin.is/heim/vorur/stoek-vara.aspx/?productid=25872',
    link_vivino: 'https://www.vivino.com/US-CA/en/barahonda-summum-monastrell/w/1679600',
    rating: '4.2',
    wineType: 'Rauðvín',
    wineColor: 'text-[#a82548]'}]

  const props = defineProps({
  wines: Array
})


</script>

<template>
<div class="flex justify-center items-center py-20">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class=" font-teko tracking-wider mb-7 text-[#FDA47E]">
      <h3 class="text-4xl md:text-5xl">Frábær rauðvín undir 3.000 kr:</h3>
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
              <span class="text-md sm:text-lg">{{ item.country }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">LAND</span>
            </div>
          </div>
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

<div class="flex justify-center items-center py-20">
  <div class="max-w-screen-md w-full px-4 font-teko text-[#3E3737]">
    <div class=" font-teko tracking-wider mb-7 text-[#FDA47E]">
      <h3 class="text-4xl md:text-5xl">Frábær rauðvín upp að 5.000 kr:</h3>
      <p>Algjör gæðavín - gætu klárast fljótlega.</p>
    </div>
    <UCarousel v-slot="{ item }" :items="items2" :ui="{ item: 'basis-full' }" arrows class="max-h-screen bg-[#FFE7D4] rounded-lg p-3 sm:p-[5%] ">
      <img title="Highlighted_product" :src="item.img" :alt="item.name" draggable="false" loading="lazy" class="w-auto max-h-[70vh] md:max-h-full">
      <div class="flex flex-col p-5">
        <div class="grid grid-cols-1 gap-3 lg:gap-5">
          <p class="text-xl" :class="`${item.wineColor}`">{{item.wineType}}</p>
          <h2 class="text-4xl md:text-5xl font-medium">{{ item.name }}</h2>
          <div>
            <div>
              <span class="text-md sm:text-lg">{{ item.country }}</span>
            </div>
            <div>
              <span class="text-md sm:text-lg text-[#7a7a7a]">LAND</span>
            </div>
          </div>
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
</template>