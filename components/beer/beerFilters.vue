<script setup>

const router = useRouter();

const searchInput = ref("");

const { beerTypes } = useBeerTypes();
const distinctTasteGroup1 = [...new Set(beerTypes.map(item => item.taste_group1))];
distinctTasteGroup1.unshift("Allar"); // Add "Allar" at the beginning of the array
const filteredBeerTypes = ref(beerTypes); // Populate with all options initially

const beerAttributes = ref({
  max: "",
  group1: "Allar",
  group2: "Allar"
});

watch(() => beerAttributes.value.group1, (newValue) => {
  if (!newValue || newValue === "Allar") {
    filteredBeerTypes.value = beerTypes; // Reset to all options if "Allar" is selected
  } else {
    filteredBeerTypes.value = beerTypes.filter(item => item.taste_group1 === newValue); // Filter based on selected value
  }
});

const onChangeFilter = () => {
  const queryParams = {};
  if (beerAttributes.value.group1){
    queryParams.group1 = beerAttributes.value.group1
  }

  if (beerAttributes.value.group2){
    queryParams.group2 = beerAttributes.value.group2
  }

  if (beerAttributes.value.max){
    queryParams.maxPrice = beerAttributes.value.max
  }

  if(searchInput.value){
    queryParams.search = searchInput.value.trim();
  };

  console.log(queryParams)

  router.push({
    query:{
      ...queryParams
    },
  });
};

const resetFilters = () => {
  // Clear all query parameters and reset attributes
  router.replace({ query: undefined });
  beerAttributes.value.max = "";
  beerAttributes.value.group1 = "Allar";
  beerAttributes.value.group2 = "Allar";
};

</script>







<template>

  <!-- Modal toggle -->
<div class="mx-auto max-w-3xl md:w-full font-teko ">
  <button data-modal-target="wine-filters" data-modal-toggle="wine-filters" class="inline-flex items-center px-4 py-2 text-m font-medium text-center text-white bg-[#625A5A] rounded-lg hover:bg-[#A48B8A] focus:ring-4 focus:outline-none focus:ring-black-200  dark:hover:bg-[#A48B8A] dark:focus:ring-black-700 ms-3" type="button">
    Síur
  </button>
</div>
<div id="wine-filters" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full font-montserrat">
  <div class="mx-auto max-w-3xl md:w-full bg-[#FFE7D4] rounded-lg shadow m-5 text-[#3E3737]">
    <div class="m-2 max-w-screen-md">
      <div class="rounded-xl p-6">
        <h2 class=" text-xl font-bold">Þrengdu niðurstöðurnar</h2>
        <p class="mt-1 text-sm text-[#7a7a7a]">Prófaðu síurnar. Með leitinni er hægt að leita að ýmsum eiginleikum, eins og nafni, árgerð og landi.</p>
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col">
            <label for="searchAll" class="text-stone-600 text-sm font-medium">Leit</label>
            <input type="text" v-model="searchInput" id="searchAll" placeholder="prófaðu leitina" class="mt-2 block w-full rounded-md text-[#3E3737] placeholder-gray-400 bg-gray-100 border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>

          <div class="flex flex-col">
            <label for="wineType1" class="text-stone-600 text-sm font-medium">Tegund</label>
            <select id="wineType1" v-model="beerAttributes.group1" label="Bjórtegund" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option v-for="beerType in distinctTasteGroup1" :key="beerType">{{ beerType }}</option>
          </select>
          </div>

         <div class="flex flex-col">
            <label for="wineType2" class="text-stone-600 text-sm font-medium">Undirtegund</label>
            <select id="wineType2" label="Undirtegund" v-model="beerAttributes.group2" class="mt-2 block w-full rounded-md text-[#3E3737] border bg-gray-100 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option key="allGroup2">Allar</option>
              <option v-for="beerType in filteredBeerTypes" :key="beerType">{{ beerType.taste_group2 }}</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label for="winePriceMin" class="text-stone-600 text-sm font-medium">Hámarksverð</label>
            <input type="number" id="winePriceMax" placeholder="Hámarksverð" v-model="beerAttributes.max" class="mt-2 block w-full rounded-md text-[#3E3737] placeholder-gray-400 bg-gray-100 border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
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


