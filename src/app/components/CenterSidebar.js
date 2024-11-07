// components/PSideBar.js

import React from "react";

export default function CenterSideBar() {
  return (
    <aside
      id="logo-sidebar"
      className="flex top-30 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full p-6 overflow-y-auto border">
        <br /> <br />
        <span className="font-lato text-4xl font-bold ml-[0px] mt-[5px] block text-red-700">Knowledge,</span>
        <span className="font-lato text-4xl font-bold ml-[0px] mt-[5px] block text-red-700">Innovation,</span>
        <span className="font-lato text-4xl font-bold ml-[0px] mt-[5px] block text-red-700">Science</span>
        <span className="font-lato text-4xl font-bold ml-[0px] mt-[5px] block text-red-700">Technology (KSIT)</span>
        <span className="font-lato text-4xl font-bold ml-[0px] mt-[5px] block text-red-700">Park</span>
        <br></br>
        <h1 className="font-lato text-sm ml-[0px] text-gray-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.686 2 6 4.686 6 8c0 4.075 6 13 6 13s6-8.925 6-13c0-3.314-2.686-6-6-6zM12 10a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          Alangilan, Batangas
        </h1>

        <br /> <br />
        <span className="font-lato text-2xl font ml-[0px] mt-[5px] block">Topics</span>

<span className="font-lato font ml-[0px] mt-[5px] block w-[300px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px]">
  Industry, Innovation & Infrastructure
</span>

<div className="flex ml-[0px] mt-[5px] space-x-2">
  <span className="font-lato font w-[120px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px]">Algorithms</span>
  <span className="font-lato font w-[100px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px]">Design</span>
</div>


        

      </div>
    </aside>
  );
}
