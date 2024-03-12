<script setup>

const props = defineProps({
  beer: Object,
  link_untappd: String,
  link_store: String,
});

let beerColor;
const handleBeerColor = () =>{
  if(props.beer.taste_group1 == 'Hveitibjór'){
    beerColor = 'text-[#E6BF83]';

  } else if(props.beer.taste_group1 == 'Stout og Porter') {
    beerColor = 'text-[#4B3A16]';

  } else if(props.beer.taste_group1 == 'Ljós lager') {
    beerColor = 'text-[#FBC249]';

  } else if(props.beer.taste_group1 == 'IPA') {
    beerColor = 'text-[#ff8c00]';
  
  } else if(props.beer.taste_group1 == 'Ávaxta- og kryddöl') {
    beerColor = 'text-[#FF7F00]';
  
  } else if(props.beer.taste_group1 == 'Súrbjór') {
    beerColor = 'text-[#f08ca0]';
  
  } else if(props.beer.taste_group1 == 'Belgískt öl') {
    beerColor = 'text-[#A0522D]';
  }

  else {beerColor = 'text-[#AA4B2B]';};
  
};
handleBeerColor();
</script>

<template>
  <div>
    <div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5 text-[#3E3737] ">
      <div class="flex flex-col p-7 font-teko">
        <p class="text-xl" :class="`${beerColor}`">{{beer.taste_group1}} - {{beer.taste_group2}}</p>
        <h2 class="text-5xl font-medium ">{{ beer.atvr_name }}</h2>
        <p class="text-xl mb-10">{{ beer.producer }}</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div>
            <span class="text-md text-xl">{{ parseInt(beer.volume).toLocaleString("de-DE") + 'ml ' + beer.container_name }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">Ílát</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ parseInt(beer.price).toLocaleString("de-DE") }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">VERÐ</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ beer.country }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">LAND</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ Math.round(beer.rating * 100) / 100 }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">EINKUNN</span>
            </div>
          </div>
          
          <div v-if="beer.taste_group2">
            <div>
            <span class="text-md text-xl">{{ beer.taste_group2 }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">BRAGÐFLOKKUR</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ beer.abv }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">%</span>
            </div>
          </div>

        </div>
        <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="props.link_store" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{beer.seller}}</a>
          <a :href="props.link_untappd" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Untappd</a>
        </div>
      </div>
    </div>
  </div>
</template>