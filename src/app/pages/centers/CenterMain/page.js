import React from "react";
import CenterSideBar from "@/app/components/centers_components/CenterSidebar";
import { user } from "@/app/Data/data";
import PaperP from "@/app/components/papers_component/paperP";
import { users } from "@/app/Data/data2";
import ProjectList from "@/app/components/project_components/ProjectList";
import { userss } from "@/app/Data/data3";

import { user1 } from "@/app/Data/data6";
import Activities from "@/app/components/centers_components/Activities";
import Prizes from "@/app/components/centers_components/Prizes";
import ProfileC from "@/app/components/centers_components/ProfileC";

const CenterMain = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <CenterSideBar />
      </div>

      <div className="flex-grow relative">
        <div className="absolute top-4 right-4">
          <div className="flex items-center w-95 border border-gray-400 text-gray-700 rounded-lg shadow-md bg-white hover:bg-gray-200">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 105.293 13.707l3.414 3.414a1 1 0 001.414-1.414l-3.414-3.414A8 8 0 0010 2zM5 10a5 5 0 1110 0A5 5 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="mr-20 mt-20 ml-20">
          <img
            src="/socials/kist1.png"
            alt="Research Icon"
            className="h-120 w-full object-cover mb-4"
          />
          <br></br>
          <p className="text-gray-600 text-justify">
            The Knowledge, Innovation, and Science Technology (KIST) Park is a
            pioneering economic zone established by Batangas State University
            (BatStateU). It aims to foster collaboration between academia and
            industry, promote technological innovation, and drive economic
            growth in the region. The KIST Park provides a conducive environment
            for research, development, and commercialization of innovative
            products and services. It offers facilities for startups,
            incubators, and research centers, as well as opportunities for
            technology transfer and knowledge sharing. By attracting businesses
            and researchers, the KIST Park aims to position Batangas State
            University as a leading center for innovation and technological
            advancement in the Philippines.
          </p>{" "}   <br></br>
          <hr className="mt-4 border-t-2 border-gray-300" /> <br></br>
         
{/* Profile page */}
           <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
              {user.slice(0, 6).map((user) => (
               <ProfileC key={user.id} user={user} />
             ))}
            </div><br></br>
            <hr className="mt-4 border-t-2 border-gray-300" /><br></br>

{/* Paper page */}
          <h1 className="font-lato text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7a1 1 0 011-1h5.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0012.414 8H20a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"
              />
            </svg>
            Research Output
          </h1>
          <div className="flex justify-end mt-[-45px] mr-10">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">9012</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Articles
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">123</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Review Articles
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            {" "}
            <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
              {users.slice(0, 2).map((userData) => (
                <PaperP key={userData.id} user={userData} />
              ))}
            </div><br></br>
            
          </div>{" "}<br></br>
          <hr className="mt-4 border-t-2 border-gray-300" /><br></br>
          

{/* Project*/}
          <h1 className="font-lato text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v18H3V3zm0 0l9 6 9-6M3 21l9-6 9 6"
              />
            </svg>
            Projects
          </h1>
          <div className="p-4">
            <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
              {userss.slice(0, 2).map((userData) => (
                <div
                  key={userData.id}
                  className="flex justify-between items-center"
                >
                  <ProjectList user={userData} />
                  <div className="ml-4 text-gray-600">
                    4/1/2022 - 3/22/2023 <br></br>Project : Research Project
                  </div>
                </div>
              ))}
            </div>
            <br></br>
          </div><br></br>
          <hr className="mt-4 border-t-2 border-gray-300" /><br></br>
          
{/* activities*/}
          <div>
           <Activities />
          </div>
          <hr className="mt-4 border-t-2 border-gray-300" /><br></br>
          
{/* NPrizes*/}
          <div>
           <Prizes />
          </div>
          <hr className="mt-4 border-t-2 border-gray-300" /><br></br><br></br>
          
        </div>
      </div>
    </div>
  );
};

export default CenterMain;
