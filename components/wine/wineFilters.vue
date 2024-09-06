<script setup>
const route = useRoute();
const router = useRouter();

const searchInput = ref("");

const { wineOrigin } = useWineOrigin(); //winwOrigin kemur frá wine_origin.json
const distinctCountry = [...new Set(wineOrigin.map(item => item.country))];
distinctCountry.unshift("Öll lönd"); // Add "Öll" at the beginning of the array
const filteredwineOrigin = ref(wineOrigin); // Populate with all options initially

const wineAttributes = ref({
  category: "Allar",
  min: "",
  max: "",
  isOrganic : "Öll vín",
  wineCountry: "Öll lönd", //land sem á að filtera á district
  wineDistrict: "Öll svæði" //district sem country á að filtera á
});


//watcher á country til að sía líka district:
watch(() => wineAttributes.value.wineCountry, (newValue) => {
  if (!newValue || newValue === "Öll lönd") {
    const distinctDistricts = [...new Set(wineOrigin.map(item => item.origin_district))]
      .filter(Boolean) // Remove any falsy values like null or undefined
      .sort(); // Sort alphabetically

    filteredwineOrigin.value = distinctDistricts.map(district => ({ origin_district: district }));// Reset to all options if "Allar" is selected
  } else {
    filteredwineOrigin.value = wineOrigin.filter(item => item.country === newValue); // Filter based on selected value
  }
});

// Add a watcher for changes in wineCountry ref
watch(() => wineAttributes.value.wineCountry, (newValue) => {
  // Check if wineType2 is currently selected
  const currentWineDistrict = wineAttributes.value.wineDistrict;

  // If wineType2 is not 'Öll svæði' and the current selection is not valid with the new selection in wineType1
  if (currentWineDistrict !== 'Öll svæði' && !wineOrigin.find(item => item.country === newValue && item.origin_district === currentWineDistrict)) {
    // Reset wineType2 to 'Öll svæði'
    wineAttributes.value.wineDistrict = 'Öll svæði';
  }
});

// Mapping object to convert category values
const categoryMapping = {
  "Allar"  : "Any",
  "Rauðvín": "Red Wine",
  "Hvítvín": "White Wine",
  "Rósavín": "Rose",
  "Freyðivín": "Sparkling Wine"
};
//Fall til að endurvarpa gildunum úr ensku í íslensku
function ReverseMapping(object, value) {
  return Object.keys(object).find(key =>
    object[key] === value);
}

// Mapping object to convert category values
const isOrganicMapping = {
  "Öll vín": "Any",
  "Lífræn vín": "true"
};

// Update wineAttributes with query parameters on component mount
onMounted(() => {
  const { query } = route;
  if (query.category) {
    //Endurmappa Enskt vínheiti í íslensk til að setja í ref gildið.
    wineAttributes.value.category = ReverseMapping(categoryMapping, query.category);
  }
  if (query.minPrice) {
    wineAttributes.value.min = query.minPrice;
  }
  if (query.maxPrice) {
    wineAttributes.value.max = query.maxPrice;
  }

  if(query.search){
    searchInput.value = query.search;
  }

  if (query.category) {
    //Endurmappa Enskt vínheiti í íslensk til að setja í ref gildið.
    wineAttributes.value.isOrganic = ReverseMapping(isOrganicMapping, query.isOrganic);
  }
  
  if (query.wineCountry) {
    wineAttributes.value.wineCountry = query.wineCountry;
  }

  // Ensure districts are distinct and sorted on page load
  const filteredDistricts = [...new Set(wineOrigin
    .filter(item => item.country === wineAttributes.value.wineCountry || wineAttributes.value.wineCountry === "Öll lönd")
    .map(item => item.origin_district))]
    .filter(Boolean)
    .sort();

  filteredwineOrigin.value = filteredDistricts.map(district => ({ origin_district: district }));

  if (query.wineDistrict) {
    wineAttributes.value.wineDistrict = query.wineDistrict;
  }
});



const onChangeFilter = () => {
  const queryParams = {};
  if (wineAttributes.value.min){
    queryParams.minPrice = wineAttributes.value.min
  }

  if (wineAttributes.value.max){
    queryParams.maxPrice = wineAttributes.value.max
  }

  // Map displayed category value to query parameter value
  queryParams.category = categoryMapping[wineAttributes.value.category]

  if(searchInput.value){
    queryParams.search = searchInput.value.trim();
  };
  
  // Map displayed category value to query parameter value
  queryParams.isOrganic = isOrganicMapping[wineAttributes.value.isOrganic]

  if (wineAttributes.value.wineCountry){
    queryParams.wineCountry = wineAttributes.value.wineCountry
  }

  if (wineAttributes.value.wineDistrict){
    queryParams.wineDistrict = wineAttributes.value.wineDistrict
  }

  console.log(queryParams)

  router.push({
    query:{
      ...queryParams
    },
  });
};

const resetFilters = () => {
  //tek af alla query params og endurstilli ref
  router.replace({ query: undefined });
  wineAttributes.value.min = "",
  wineAttributes.value.max = "",
  wineAttributes.value.category = "Allar",
  searchInput.value="",
  wineAttributes.value.isOrganic = "Öll vín"

  wineAttributes.value.wineCountry = "Öll lönd";
  wineAttributes.value.wineDistrict = "Öll svæði";
};


/*onMounted(() => {
  winePriceMin.value = route.query.minPrice;
  winePriceMax.value = route.query.maxPrice;
});*/

</script>

<template>
  <!-- Modal toggle -->
<div class="mx-auto max-w-3xl md:w-full font-teko ">
  <button data-modal-target="wine-filters" data-modal-toggle="wine-filters" class="inline-flex items-center px-4 py-2 text-md tracking-wide font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#A48B8A] focus:ring-4 focus:outline-none focus:ring-black-200  dark:hover:bg-[#A48B8A] dark:focus:ring-black-700 ms-3" type="button">
    Þrengja leit
  </button>
</div>
<div id="wine-filters" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full font-montserrat">
  <div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5 text-[#3E3737]">
    <div class="m-2 max-w-screen-md">
      <div class="rounded-xl p-6">
        <h2 class=" text-xl font-bold">Þrengdu niðurstöðurnar</h2>
        <p class="mt-1 text-sm text-[#7a7a7a]">Prófaðu síurnar. Með leitinni er hægt að leita að ýmsum eiginleikum, eins og nafni, árgerð og landi.</p>
        <!-- Hérna er fyrsta röð af filterum -->
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col">
            <label for="searchAll" class="text-stone-600 text-sm font-medium">Leit</label>
            <input type="text" v-model="searchInput" id="searchAll" placeholder="prófaðu leitina" class="mt-2 block w-full rounded-md text-[#3E3737] placeholder-gray-400 bg-gray-100 border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>


          <div class="flex flex-col">
            <label for="wineType" class="text-stone-600 text-sm font-medium">Tegund</label>
            <select id="wineType" v-model="wineAttributes.category" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>Allar</option>
              <option>Rauðvín</option>
              <option>Hvítvín</option>
              <option>Rósavín</option>
              <option>Freyðivín</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label for="winePriceMin" class="text-stone-600 text-sm font-medium">Lágmarksverð</label>
            <input type="number" id="winePriceMin" placeholder="Lágmarksverð" v-model="wineAttributes.min" class="mt-2 block w-full rounded-md text-[#3E3737] placeholder-gray-400 bg-gray-100 border border-gray-200  px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>

          <div class="flex flex-col">
            <label for="winePriceMin" class="text-stone-600 text-sm font-medium">Hámarksverð</label>
            <input type="number" id="winePriceMax" placeholder="Hámarksverð" v-model="wineAttributes.max" class="mt-2 block w-full rounded-md text-[#3E3737] placeholder-gray-400 bg-gray-100 border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>

          <div class="flex flex-col">
            <label for="isOrganic" class="text-stone-600 text-sm font-medium">Lífrænt</label>
            <select id="isOrganic" v-model="wineAttributes.isOrganic" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>Öll vín</option>
              <option>Lífræn vín</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="wineCountry" class="text-stone-600 text-sm font-medium">Land</label>
            <select id="wineCountry" v-model="wineAttributes.wineCountry" label="Land" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option v-for="country in distinctCountry" :key="country">{{ country }}</option>
          </select>
          </div>

         <div class="flex flex-col">
            <label for="wineDistrict" class="text-stone-600 text-sm font-medium">Svæði</label>
            <select id="wineDistrict" label="Svæði" v-model="wineAttributes.wineDistrict" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option key="districtFilter">Öll svæði</option>
              <option v-for="district in filteredwineOrigin" :key="district">{{ district.origin_district }}</option>
            </select>
          </div>
        </div>

        <div class="mt-6 grid w-full grid-cols-3 justify-end space-x-4 md:flex font-teko text-m">
          <button class="active:scale-95 rounded-lg text-gray-900 bg-gray-300 px-8 py-2 font-medium  outline-none focus:ring hover:opacity-90"
                  data-modal-hide="wine-filters">Loka</button>
          <button @click ="resetFilters" 
                  class="active:scale-95 rounded-lg text-gray-900 bg-gray-300 px-8 py-2 font-medium  outline-none focus:ring hover:opacity-90"
                  >Endurstilla</button>
          <button @click="onChangeFilter"
                  class="active:scale-95 rounded-lg px-8 py-2 font-medium text-white bg-[#625A5A] outline-none focus:ring hover:opacity-90"
                  data-modal-hide="wine-filters">Leita</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


