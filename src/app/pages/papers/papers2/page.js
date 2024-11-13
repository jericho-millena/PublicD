"use client";

import React, { useState } from "react";
import SideBar from "@/app/components/papersdata_component/Sidebar";
import ResearchActivity from "@/app/components/papersdata_component/ResearchActivity";
import AuthorsData from "@/app/components/papersdata_component/Authorsdata";
import ShowMoreButton from "@/app/components/profile_components/ShowMoreButton";



const PapersMain = () => {
 
  // Author data
  const authors = [
    {
      name: "Firstname Middlename Lastname",
      degree: "Doctorate Degree in Computer Science",
      university: "Batangas State University-Alangilan Campus",
      image: "/RProfile.png",
    },

    {
      name: "Firstname Middlename Lastname",
      degree: "Doctorate Degree in Computer Science",
      university: "Batangas State University-Alangilan Campus",
      image: "/RProfile.png",
    },

    {
      name: "Firstname Middlename Lastname",
      degree: "Doctorate Degree in Computer Science",
      university: "Batangas State University-Alangilan Campus",
      image: "/RProfile.png",
    },

    {
      name: "Firstname Middlename Lastname",
      degree: "Doctorate Degree in Computer Science",
      university: "Batangas State University-Alangilan Campus",
      image: "/RProfile.png",
    },
    // Add additional authors as needed
  ];

  return (
    <div className="flex h-5">
      {/* Sidebar */}
      <div className="w-1/4 ">

        <SideBar />

      </div>

      <div className="w-3/4 p-4">
        <div className="py-2">
        <div className="w-10/2 p-4">
        <div className="py-2">
          <div className="flex justify-end mb-4">
            <div className="flex items-center w-96 border border-gray-400 text-gray-700 rounded-lg shadow-md bg-white hover:bg-gray-200">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 2a8 8 0 105.293 13.707l3.414 3.414a1 1 0 001.414-1.414l-3.414-3.414A8 8 0 0010 2zM5 10a5 5 0 1110 0A5 5 0 015 10z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          </div>
          {/* Research Activity */}
          <div className="py-5">
            <h1 className="text-2xl text-black-800">Research activity within the year (142)</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 mt-10">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchActivity />
            </div>
      
          </div>

          {/* Abstract */}
          <div className="pt-5 pb-8">

            <h1 className="mt-20 text-2xl text-black-800">Abstract</h1>
            <p className="text-s text-black-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque metus orci, ut rhoncus felis
            elementum ac. Mauris at sollicitudin mauris. Nulla a tristique purus. Donec odio sapien, bibendum quis nisi
            ut, convallis tempor augue. Curabitur nunc lacus, posuere sed semper in, dignissim in nunc. Sed vel volutpat
            erat, eget malesuada urna. Aenean tellus elit, maximus at nunc nec, congue condimentum nulla. Quisque nec
            malesuada mauris. Cras nisl ipsum, suscipit vitae malesuada eget, tempor tristique odio. Vivamus pharetra
            ullamcorper tellus, et faucibus ligula hendrerit sed. Integer vestibulum convallis nisl, ac tincidunt nulla
            lobortis ac. Cras iaculis metus vitae felis laoreet facilisis. Integer vitae tempor augue, a fermentum enim.
            Vivamus urna eros, congue sed molestie sed, aliquet id orci. Nam tincidunt leo ut turpis dictum consectetur.
            </p>
          </div>

          {/* Publication Details */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col justify-center w-full h-28 col-span-2 mt-11">
              <div className="text-m text-black-800"><span className="semi-bold">Language</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Article Number</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Journal</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Volume</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Issue Number</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Publication Status</span></div>
            </div>

            <div className="flex flex-col justify-center w-full h-28 col-span-2 mt-11">
              <div className="text-m text-black-800"><span className="semi-bold">English</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">36</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Lorem Ipsum Archives of Electronics</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">40</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">1</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">Not yet published</span></div>
            </div>
          </div>

          {/* About the Authors */}
          <div className="pt-10 pb-5 mt-40">
            <h1 className="text-3xl text-black-800">About the Authors (6)</h1>
          </div>
          <AuthorsData authors={authors} />
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center w-full h-28 col-span-2">
               <ShowMoreButton/>
            </div>
            </div>
        
      </div>

   
    </div>

</div>



  );
};

export default PapersMain;
