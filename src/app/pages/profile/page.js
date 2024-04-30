import React from 'react';
import 'C:/Users/Joshua John/PublicD/src/app/pages/profile/page.css'
export default function Profile() {
  return (


<main>
    <form class="max-w-md mx-auto adjustable-search-bar">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <input type="search" id="default-search" class="block w-full p-4 ps-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's on your mind?" required />
            <button type="submit" class="absolute inset-y-0 right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </button>
        </div>
    </form>


    <form class="max-w-sm mx-auto">
  <label for="years" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Year</label>
  <select id="years" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose</option>
    <option value="year">2024</option>
    <option value="year">2023</option>
    <option value="year">2022</option>
    <option value="year">2021</option>
  </select>
</form>




<form class="dialect">
  <label for="Language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language / Dialect</label>
  <select id="years" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose</option>
    <option value="language">English</option>
    <option value="language">Tagalog</option>
  </select>
</form>


<form class="sdg">
  <label for="Language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sustainable Development Goals</label>
  <select id="years" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose</option>
    <option value="sdg">No Poverty</option>
    <option value="sdg">Zero Hunger</option>
    <option value="sdg">Good Health & Well-being</option>
    <option value="sdg">Quality Education</option>
    <option value="sdg">Gender Equality</option>
    <option value="sdg">Clean Water & Sanitation</option>
    <option value="sdg">Affordable & Clean Energy</option>
    <option value="sdg">Decent Work & Economic Growth</option>
    <option value="sdg">Industry, Innovation & Infrastructure</option>
    <option value="sdg">No Poverty</option>
    <option value="sdg">No Poverty</option>
    <option value="sdg">No Poverty</option>
    <option value="sdg">No Poverty</option>
    
  </select>
</form>


</main>





  )

}
