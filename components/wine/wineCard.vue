<script setup>

const props = defineProps({
  wine: Object,
  link_vivino: String,
  link_store: String,
  wine_image: String
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
  } else if(props.wine.category == 'Sparkling Wine') {
    wineColor = 'text-[#fec67a]';
    wineType = 'Freyðivín';
  }
    else {wineColor = 'text-gray-200';
    wineType = props.wine.category};
  
};
handleWineColor();

// Function to convert recommendation to rating
const gradeRecommendation = (recommendation, rating) => {
  if (recommendation >= 0.95) return 'Framúrskarandi kaup';
  if (recommendation >= 0.85) return 'Frábær kaup';
  if (recommendation >= 0.75) return 'Mjög góð kaup';
  if (recommendation >= 0.65) return 'Góð kaup';
  if (rating >= 4.2)          return 'Frábær einkunn';
};

// Compute the rating based on the recommendation
const wineRating = computed(() => gradeRecommendation(props.wine.recommendation, props.wine.rating));
</script>

<template>
  <div>
    <div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5 text-[#3E3737] ">
      <div class="flex flex-col p-7 font-teko">
        <p class="text-xl" :class="`${wineColor}`">{{wineType}}</p>
        <h2 class="mb-3 text-5xl font-medium">{{ wine.wine_name }}</h2>
        <div class="flex flex-row">
          <div v-if="wineRating == 'Framúrskarandi kaup'">
            <img src="~/assets/images/twemoji--pinched-fingers.png" class="w-[25px] h-[25px] object-cover">
          </div>
          <div v-else-if="wineRating == 'Frábær kaup'">
            <img src="~/assets/images/twemoji--star-struck.png" class="w-[25px] h-[25px] object-cover">
          </div>
          <div v-else-if="wineRating == 'Mjög góð kaup'">
            <img src="~/assets/images/twemoji--grinning-face-with-big-eyes.png" class="w-[25px] h-[25px] object-cover">
          </div>
          <div v-else-if="wineRating == 'Góð kaup'">
            <img src="~/assets/images/twemoji--slightly-smiling-face.png" class="w-[25px] h-[25px] object-cover">
          </div>
          <div v-else-if="wineRating == 'Frábær einkunn'">
            <img src="~/assets/images/emojione--glowing-star.png" class="w-[25px] h-[25px] object-cover">
          </div>
          <div><p class="mb-5 mx-3 text-2xl font-medium text-[#3E3737]">{{ wineRating }} </p></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
          <!-- Image column -->
          <div class="flex-shrink-0 col-span-1">
            <img :src="props.wine_image" :href="props.link_vivino" alt="Wine Image" class="w-full md:w-[150px] h-[250px] object-cover" />
          </div>
          <!-- Card details -->
          <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div>
                <span class="text-md md:text-2xl">{{ wine.producer }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">FRAMLEIÐANDI</span>
              </div>
            </div>

            <div>
              <div>
                <span class="text-md md:text-2xl">{{ parseInt(wine.price).toLocaleString("de-DE") }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">VERÐ</span>
              </div>
            </div>

            <div v-if="wine.country && wine.country!= 'N/F'">
              <div>
                <span class="text-md md:text-2xl">{{ wine.country }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">LAND</span>
              </div>
            </div>

            <div>
              <div>
                <span class="text-md md:text-2xl">{{ wine.rating }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">EINKUNN</span>
              </div>
            </div>

            <div v-if="wine.taste_group && wine.taste_group!= 'N/F'">
              <div>
                <span class="text-md md:text-2xl">{{ wine.taste_group }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">BRAGÐFLOKKUR</span>
              </div>
            </div>

            <div v-if="wine.grapes !=0">
              <div>
                <span class="text-md md:text-2xl">{{ wine.grapes }}</span>
              </div>
              <div>
                <span class="text-md md:text-lg text-[#7a7a7a]">ÞRÚGUR</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-4 md:mt-6 tracking-wide">
          <a :href="props.link_store" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#888080] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#625A5A] dark:hover:bg-[#888080] dark:focus:ring-[#352E2E]">{{wine.seller}}</a>
          <a :href="props.link_vivino" target="_blank" rel="external" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Vivino</a>
        </div>
      </div>

    </div>
  </div>
</template>