import React from "react";
import CenterSideBar from "@/app/components/centers_components/CenterSidebar";
import ProfileList from "@/app/components/profile_components/ProfileList";
import { user } from "@/app/Data/data";
import PaperP from "@/app/components/papers_component/paperP";
import { users } from "@/app/Data/data2";
import ProjectList from "@/app/components/project_components/ProjectList";
import { userss } from "@/app/Data/data3";
import Card from "@/app/components/centers_components/newsFile";
import { user1 } from "@/app/Data/data6";

const CenterMain = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <CenterSideBar />
      </div>

      <div className="flex-grow relative">
        {/* Search button in the upper-right corner */}
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
          </p>{" "}
          <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          <h1 className="font-lato text-2xl flex items-center">
            {/* Profile icon */}
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
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            Researchers
          </h1>
          {/* Profiles */}
          <div className="p-4">
            <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
              {user.slice(0, 6).map((user) => (
                <ProfileList key={user.id} user={user} />
              ))}
            </div>{" "}
            <br></br>
            <div className="flex justify-center items-center mt-4">
              <button className="px-8 py-2 text-black border hover:bg-blue-600 shadow-md flex items-center justify-center">
                Show More Researchers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
          <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          <h1 className="font-lato text-2xl flex items-center">
            {/* Folder icon */}
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
          {/* Paper */}
          <div className="p-4 w-[600px]"> {/* Fixed width of 400px */}
          <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
            {users.slice(0, 2).map((userData) => (
            <PaperP key={userData.id} user={userData} />
              ))}
            </div>
            <br></br>
            <div className="flex justify-center items-center mt-4">
              <button className="px-8 py-2 text-black border hover:bg-blue-600 shadow-md flex items-center justify-center">
                Show More Researches
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
          <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          <h1 className="font-lato text-2xl flex items-center">
            {/* Cube icon */}
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
          {/* Projects */}
          <div className="p-4">
  <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
    {userss.slice(0, 2).map((userData) => (
      <div key={userData.id} className="flex justify-between items-center">
        <ProjectList user={userData} />
        <div className="ml-4 text-gray-600">4/1/2022    -   3/22/2023 <br></br>Project : Research Project</div>
      </div>
    ))}
  </div>
  <br></br>
  <div className="flex justify-center items-center mt-4">
    <button className="px-8 py-2 text-black border hover:bg-blue-600 shadow-md flex items-center justify-center">
      Show More Projects
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>

          <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          {/* activities*/}
          <h1 className="font-lato text-2xl flex items-center">
            {/* Calendar icon */}
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
                d="M8 7V3m8 4V3M3 9h18M4 5h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
              />
            </svg>
            Acitivites
          </h1>
          <div className="flex justify-end mt-[-45px] mr-10">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">1234</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Reviewed Article
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">90</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Hosting Event
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">9012</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Oral Presentation
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">123</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Invited Talk
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ProjectName" class="font-lato text-[#333333] text-[25px]">
            Project Name / Title
          </div>
          <p id="deets-text21" class="text-justify text-[15px] text-gray-500">
            John Doe (Speaker)
          </p>
          <p id="deets-text22" class="text-justify text-[15px] text-black">
            April 12, 2023 <br></br> Activity : Invited Talk
          </p>{" "}
          <br></br>
          <br></br>
          <div id="ProjectName" class="font-lato text-[#333333] text-[25px]">
            Project Name / Title
          </div>
          <p id="deets-text21" class="text-justify text-[15px] text-gray-500">
            John Doe (Speaker)
          </p>
          <p id="deets-text22" class="text-justify text-[15px] text-black">
            April 12, 2023 <br></br> Activity : Invited Talk
          </p>
          <div className="flex justify-center items-center mt-4">
            <button className="px-8 py-2 text-black border hover:bg-blue-600 shadow-md flex items-center justify-center">
              Show More Activities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>{" "}
          <br></br> <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          {/* News/media*/}
          <h1 className="font-lato text-2xl flex items-center">
            {/* newspaper icon */}
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
                d="M19 20H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v13a2 2 0 01-2 2zM3 8h18M8 12h8M8 16h8M5 20h14"
              />
            </svg>
            News/Media
          </h1>
      {/* news/media */}
           <div className="p-4">
           <div className="mt-4 flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
          {user1.map((user) => (
            <Card key={user1.id} user={user} />
          ))}
        </div>{" "}
            <br></br>
            <div className="flex justify-center items-center mt-4">
              <button className="px-8 py-2 text-black border hover:bg-blue-600 shadow-md flex items-center justify-center">
                Show More News Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <br></br> <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
          {/* NPrizes*/}
          <h1 className="font-lato text-2xl flex items-center">
            
            {/* newspaper icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 3.91 2.73 7.28 6.5 8.36V21h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1v-0.64c3.77-1.08 6.5-4.45 6.5-8.36 0-5.52-4.48-10-10-10zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            Prizes
          </h1>{" "}
          <br></br>
          <div id="ProjectName" class="font-lato text-[#333333] text-[25px]">
            Prize Title
          </div>
          <p id="deets-text21" class="text-justify text-[15px] text-gray-500">
            John Doe (Speaker)
          </p>
          <p id="deets-text22" class="text-justify text-[15px] text-black">
            April 12, 2023
          </p>{" "}
          <br></br>
          <div id="ProjectName" class="font-lato text-[#333333] text-[25px]">
            Prize Title
          </div>
          <p id="deets-text21" class="text-justify text-[15px] text-gray-500">
            John Doe (Speaker)
          </p>
          <p id="deets-text22" class="text-justify text-[15px] text-black">
            April 12, 2023
          </p>{" "}
          <br></br>
          <br></br>
          {/* Horizontal line */}
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default CenterMain;
