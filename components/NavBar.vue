<template>
 

<nav class="fixed top-0 left-0 right-0 z-50 bg-[#2A2424] text-[#FDA47E] ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-3xl font-teko whitespace-nowrap">Góð Vínkaup</span>
    </NuxtLink>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium font-montserrat flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <li>
          <a href="/wine" class="block py-2 px-3 rounded hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0">Vín</a>
        </li>
        <li>
          <NuxtLink to="/blogs" class="block py-2 px-3 rounded hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0">Stækkunarglerið</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="block py-2 px-3 rounded hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0">Um Góð Vínkaup</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
</template>