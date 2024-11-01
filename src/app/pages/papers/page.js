import React from 'react';
import PaperP from '@/app/components/paperP';
import { users } from '@/app/Data/data2'; 
import { DropDown } from '@/app/components/dropdown';

export default function Papers() {
  return (
    <div className="p-8">
      <nav className="bg-white-600 p-4 flex items-center justify-between">
        <form className="relative flex-grow">
          <input
            type="text"
            className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 px-3 text-gray-600 hover:text-gray-700 focus:outline-none"
          >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            <span className="sr-only">Filter</span>
          </button>
        </form>
        <DropDown />
      </nav>
      <div className="p-4">
        <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
          {users.map((userData) => (
            <PaperP key={userData.id} user={userData} />
          ))}
        </div>
      </div>
    </div>
  );
}
