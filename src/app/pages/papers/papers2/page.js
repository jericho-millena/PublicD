"use client";

import React, { useState } from "react";
import SideBar from "@/app/components/papersdata_component/Sidebar";
import ResearchActivityGrid from "@/app/components/profile_components/ResearchActivityGrid";
import YearSelector from "@/app/components/profile_components/YearSelector";
import AuthorsData from "@/app/components/papersdata_component/Authorsdata";
import ShowMoreButton from "@/app/components/profile_components/ShowMoreButton";



const ProfileMain = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const years = [2024, 2023, 2022, 2021];

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
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <SideBar />
      </div>

      <div className="w-3/4 p-4">
        <div className="py-2">
          {/* Research Activity */}
          <div className="py-5">
            <h1 className="text-2xl text-black-800">Research activity per year</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchActivityGrid year={selectedYear} />
            </div>
            <div className="flex items-center justify-center w-full h-48">
              <YearSelector years={years} selectedYear={selectedYear} onSelectYear={setSelectedYear} />
            </div>
          </div>

          {/* Abstract */}
          <div className="pt-5 pb-8">
            <h1 className="text-2xl text-black-800">Abstract</h1>
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





  );
};

export default ProfileMain;
