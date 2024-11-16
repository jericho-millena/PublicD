"use client";

import React, { useState } from "react";
import PaperP from "@/app/components/papers_component/paperP";
import { users } from "@/app/Data/data2"; // Assuming data2 is the data source
import FilterOptions from "@/app/components/FilterOptions";

export default function Papers() {
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle input change and update search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <nav className="bg-white-600 p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <form className="relative w-full max-w-xl flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange} // Handle the search input change
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
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="flex">
        <div className="w-1/4">
          <FilterOptions />
        </div>

        {/* Centering the cards */}
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 gap-10 items-center">
            {/* Map over the filtered users instead of the entire users array */}
            {filteredUsers.map((userData) => (
              <PaperP key={userData.id} user={userData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
