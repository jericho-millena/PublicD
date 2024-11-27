import React, { useState } from "react";

export default function CenterSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 sm:hidden p-2 bg-red-700 text-white rounded-md focus:outline-none"
      >
        {/* Icon for the Hamburger */}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-96 h-screen bg-white border transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static`}
        aria-label="Sidebar"
      ><br></br>   <br></br>
        <div className="h-full p-6 overflow-y-auto flex flex-col justify-start">
          <div className="mt-4">
            <span className="font-lato text-4xl font-bold block text-red-700">Knowledge,</span>
            <span className="font-lato text-4xl font-bold block text-red-700">Innovation,</span>
            <span className="font-lato text-4xl font-bold block text-red-700">Science</span>
            <span className="font-lato text-4xl font-bold block text-red-700">Technology (KSIT)</span>
            <span className="font-lato text-4xl font-bold block text-red-700">Park</span>
          </div>
          <h1 className="font-lato text-sm text-gray-500 flex items-center mt-4">
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
          <div className="mt-4"> <br></br>
            <span className="font-lato text-2xl block">Topics</span>
            <span className="font-lato w-[300px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px] block">
              Industry, Innovation & Infrastructure
            </span>
            <div className="flex mt-4 space-x-2">
              <span className="font-lato w-[120px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px]">Algorithms</span>
              <span className="font-lato w-[100px] h-[35px] bg-[#e3646f] text-center p-[5px] rounded-[23px]">Design</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Background overlay when the sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        ></div>
      )}
    </>
  );
}