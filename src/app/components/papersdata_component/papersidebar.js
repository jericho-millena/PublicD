import React from "react";
import GraphLogic from "./GraphLogic";
import PaperCalendar from "./papercalendar";

// Circular Progress Bar Component
const CircularProgressBar = ({ progress, color }) => {
  const radius = 35; // radius of the circle
  const circumference = 2 * Math.PI * radius; // calculate the circumference of the circle
  const progressLength = (progress / 100) * circumference; // progress length
  const remainingLength = circumference - progressLength; // remaining length of the circle

  return (
    <div className="w-20 h-20 relative mb-4">
      {/* Background Circle */}
      <svg className="absolute" width="100%" height="100%">
        <circle cx="50%" cy="50%" r={radius} fill="none" stroke="gray" strokeWidth="4" />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width="100%" height="100%" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke={color} // use dynamic color
          strokeWidth="4"
          strokeDasharray={`${progressLength} ${remainingLength}`}
        />
      </svg>

      {/* Progress Percentage */}
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500 font-bold text-lg">
        {progress}%
      </span>
    </div>
  );
};

export default function PaperSideBar() {
  return (
    <div className="flex w-full overflow-hidden">
      {/* Sidebar Section */}
      <aside
        id="logo-sidebar"
        className="flex flex-col w-1/4 h-screen overflow-y-auto border bg-white"
        aria-label="Sidebar"
      >
        {/* Research Title Label */}
        <div className="mt-20 mb-4 text-center w-full">
          <span className="text-xl font-bold text-gray-900">Research name / title</span>
        </div>

        {/* Authors and Description Label */}
        <div className="mb-4 text-center w-full">
          <span className="text-l text-gray-900">
            Authors... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem non lorem gravida
            imperdiet non at elit. Suspendisse rhoncus ipsum quis risus.
          </span>
        </div>

        {/* Progress Bar 1 */}
        <div className="self-start mb-4 ml-6">
          <CircularProgressBar progress={90} color="red" />
          <span className="text-s text-gray-900">Progress</span>
        </div>

        <div className="mb-4 text-center w-full">
          <span className="text-xl font-bold text-gray-900">Research Statistics</span>
        </div>

        {/* Progress Bar 2 */}
        <div className="flex items-center justify-start ml-6 mb-4 w-full">
          <div className="mr-4">
            <CircularProgressBar progress={70} color="red" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: "red" }}></div>
              <span className="text-s text-gray-900">Downloads</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: "gray" }}></div>
              <span className="text-s text-gray-900">Views</span>
            </div>
          </div>
        </div>

        <div className="mb-5 text-center w-full">
          <span className="text-xl font-bold text-gray-900 mb-10">Download and Views per Month</span>
        </div>

        {/* import the graphlogic.js */}
        <GraphLogic />
      </aside>

      {/* Main Content Section */}
      <div className="flex-1 p-6 bg-gray-100 overflow-hidden">
        {/* Main Information Section */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-end mb-4">
            <div className="w-full max-w-sm">
              <div className="flex items-center border border-gray-400 text-gray-700 rounded-lg shadow-md bg-white hover:bg-gray-200">
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
          </div>
          <PaperCalendar />
          <div className="text-xl font-bold text-gray-900 mt-10 mb-5">Abstract</div>
          <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque metus orci, ut rhoncus felis
            elementum ac. Mauris at sollicitudin mauris. Nulla a tristique purus. Donec odio sapien, bibendum quis nisi
            ut, convallis tempor augue. Curabitur nunc lacus, posuere sed semper in, dignissim in nunc. Sed vel volutpat
            erat, eget malesuada urna. Aenean tellus elit, maximus at nunc nec, congue condimentum nulla. Quisque nec
            malesuada mauris. Cras nisl ipsum, suscipit vitae malesuada eget, tempor tristique odio. Vivamus pharetra
            ullamcorper tellus, et faucibus ligula hendrerit sed. Integer vestibulum convallis nisl, ac tincidunt nulla
            lobortis ac. Cras iaculis metus vitae felis laoreet facilisis. Integer vitae tempor augue, a fermentum enim.
            Vivamus urna eros, congue sed molestie sed, aliquet id orci. Nam tincidunt leo ut turpis dictum consectetur.
          </p>

          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Language</span> English
          </div>
          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Article Number</span> 36
          </div>
          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Journal</span> lorem ipsum Archives of Electronics
          </div>
          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Volume</span> 40
          </div>
          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Issue Number</span> 1
          </div>
          <div className="text-lg text-gray-800 mt-4">
            <span className="font-bold">Publication Status</span> Not yet published
          </div>

          <div className="mt-20">
            <span className="text-xl font-bold text-gray-900">About the Authors (6)</span>
          </div>

          {/* Profile Image and Details Box */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            {/* Profile 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              <img src="/RProfile.png" alt="profile" width={150} height={47} className="rounded-lg" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Firstname Middlename Lastname</h3>
                <p className="text-gray-700">Doctorate Degree in Computer Science</p>
                <p className="text-gray-700 mt-2">Batangas State University-Alangilan Campus</p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              <img src="/RProfile.png" alt="profile" width={150} height={47} className="rounded-lg" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Firstname Middlename Lastname</h3>
                <p className="text-gray-700">Doctorate Degree in Computer Science</p>
                <p className="text-gray-700 mt-2">Batangas State University-Alangilan Campus</p>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              {/* Profile Image */}
              <img src="/RProfile.png" alt="profile" width={150} height={47} className="rounded-lg" />
              {/* Details beside Profile Image */}
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Firstname Middlename Lastname</h3>
                <p className="text-gray-700">
                Doctorate Degree in Computer Science
                </p>
                <p className="text-gray-700 mt-2">Batangas State University-Alangilan Campus</p>
                
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              {/* Profile Image */}
              <img src="/RProfile.png" alt="profile" width={150} height={47} className="rounded-lg" />
              {/* Details beside Profile Image */}
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Firstname Middlename Lastname</h3>
                <p className="text-gray-700">
                Doctorate Degree in Computer Science
                </p>
                <p className="text-gray-700 mt-2">Batangas State University-Alangilan Campus</p>
                
              </div>
            </div>

            <div className="flex justify-center items-center mt-4 w-full ml-40">
    <button className="px-8 py-2 text-black border hover:bg-red-600 shadow-md flex items-center justify-center">
      Show More 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
             </button>
            </div>
           </div>
          </div>
        </div>
      </div>
    
  );
}
