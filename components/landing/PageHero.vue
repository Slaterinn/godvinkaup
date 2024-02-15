<template>
  <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('../assets/images/background.jpg')]">
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-9xl font-montserrat mb-10 text-white">Góð vínkaup</h1>
        <p class="mt-6 text-5xl tracking-wider font-teko text-white"> Hjálpar þér að gera betri kaup </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button type="button" @click="navigateTo('/wine')" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium  text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Vín</button>
          <button type="button" @click="navigateTo('/beer')" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Bjór</button>
        </div>
      </div>

      <div class="absolute text-[#ACAC9A] flex bottom-5 justify-center items-center grid grid-cols-1 gap-3 text-center">
        <p class="text-xl md:text-2xl">Nokkur góð kaup</p>
        <UIcon name="i-heroicons-arrow-small-down-solid" class="text-7xl mx-auto"/>
      </div>

    </div>
    
    <div class="z-2 absolute w-full h-full bg-black opacity-50"></div>
  </div>

  
</template>