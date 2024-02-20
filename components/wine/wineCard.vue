<script setup>

const props = defineProps({
  wine: Object,
  link_vivino: String,
  link_store: String,
});

let wineColor;
let wineType;
const handleWineColor = () =>{
  if(props.wine.category == 'Red Wine'){
    wineColor = 'text-[#a82548]';
    wineType = 'Rauðvín';
  } else if(props.wine.category == 'White Wine') {
    wineColor = 'text-[#a9ae03]';
    wineType = 'Hvítvín';
  } else if(props.wine.category == 'Rose') {
    wineColor = 'text-[#f98e72]';
    wineType = 'Rósavín';
  } else {
    wineColor = 'text-[#fec67a]';
    wineType = 'Freyðivín';
  }
};
handleWineColor();

</script>

<template>
  <div>
    <div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5 text-[#FFE7D4] ">
      <div class="flex flex-col p-7 font-teko">
        <p class="text-lg" :class="`${wineColor}`">{{wineType}}</p>
        <h2 class="mb-10 text-5xl font-medium ">{{ wine.wine_name }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div>
            <span class="text-md text-xl">{{ wine.producer }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">FRAMLEIÐANDI</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ parseInt(wine.price).toLocaleString("de-DE") }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">VERÐ</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ wine.country }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">LAND</span>
            </div>
          </div>

          <div>
            <div>
            <span class="text-md text-xl">{{ wine.rating }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">EINKUNN</span>
            </div>
          </div>
          
          <div v-if="wine.taste_group">
            <div>
            <span class="text-md text-xl">{{ wine.taste_group }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">BRAGÐFLOKKUR</span>
            </div>
          </div>

          <div v-if="wine.grapes !=0">
            <div>
            <span class="text-md text-xl">{{ wine.grapes }}</span>
            </div>
            <div>
            <span class="text-md text-[#7a7a7a]">ÞRÚGUR</span>
            </div>
          </div>

        </div>
        <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="props.link_store" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E] ">{{wine.seller}}</a>
          <a :href="props.link_vivino" target="_blank" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>
    </div>
  </div>
</template>