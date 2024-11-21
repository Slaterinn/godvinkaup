<template>
  <div class="top-0 relative h-dvh w-100 bg-no-repeat bg-cover bg-bottom bg-[url('~/assets/images/background.jpg')]">
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center m-4 lg:w-1/2">
        <h1 class="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-montserrat mb-10 text-white">Gerðu alltaf góð vínkaup</h1>
        <p class="mt-6 text-4xl sm:text-5xl md:text-6xl tracking-wider font-teko text-white"> Finndu gæða bjór og vín á betra verði </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a type="button" href="/wine" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium  text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Vín</a>
          <a type="button" href="/beer" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Bjór</a>
          <a type="button" href="/blogs" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Efni</a>
        </div>
      </div>

      <div class="absolute text-[#ACAC9A] flex bottom-5 justify-center items-center grid grid-cols-1 gap-3 text-center">
        <p class="text-2xl md:text-3xl mx-auto">Sérstök meðmæli</p>
        <UIcon name="i-heroicons-arrow-small-down-solid" class="text-4xl md:text-6xl mx-auto"/>
      </div>
    </div>
    
    <div class="z-2 absolute w-full h-full bg-black opacity-50"></div>
  </div>

  
</template>