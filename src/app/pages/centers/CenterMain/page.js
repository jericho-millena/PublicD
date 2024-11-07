import React from 'react';

export default function Profile() {
  return (
    <div className="p-8">
      

      <div className="p-4 flex">
        
        {/* Main box */}
        <div id="box" className="relative w-[400px] h-[894px] bg-white pt-[90px] border-2 border-red">
          <span className="text-2xl font-bold ml-[40px] mt-[5px] block color-red">Knowledge,</span>
          <span className="text-2xl font-bold ml-[40px] mt-[5px] block">Innovation,</span>
          <span className="text-2xl font-bold ml-[40px] mt-[5px] block">Science</span>
          <span className="text-2xl font-bold ml-[40px] mt-[5px] block">Technology (KSIT)</span>
          <span className="text-2xl font-bold ml-[40px] mt-[5px] block">Park</span>
          <div className="flex items-center ml-[70px] mt-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 3.607 5.793 11.295 6.169 11.77a.75.75 0 0 0 1.162 0c.376-.475 6.169-8.163 6.169-11.77 0-3.728-3.022-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
            <h1 className="font-lato text-sm text-gray-500">Alangilan, Batangas</h1>
          </div>
          <div id="additional-box" className="w-[100px] h-[50px] bg-white mt-[50px] ml-[30px] text-center p-[5px]">
            <span className="font-roboto text-lg text-black -ml-[15px]">Topics</span>
          </div>
          <div
            id="additional-box1"
            className="w-[300px] h-[37px] bg-[#e3646f] mt-[10px] ml-[40px] text-center p-[5px] rounded-[23px]"
          >
            <span className="font-arial text-sm text-black -ml-[15px]">Industry, Innovation. & Infrastructure</span>
          </div>
          <div
            id="additional-box2"
            className="w-[300px] h-[37px] bg-[#e3646f] mt-[10px] ml-[40px] text-center p-[5px] rounded-[23px]"
          >
            <span className="font-arial text-sm text-black -ml-[15px]">Algorithms</span>
          </div>
          <div
            id="additional-box3"
            className="w-[300px] h-[37px] bg-[#e3646f] mt-[10px] ml-[40px] text-center p-[5px] rounded-[23px]"
          >
            <span className="font-arial text-sm text-black -ml-[15px]">Designs</span>
          </div>
        </div>
 {/* search */}
        <nav className="bg-600 p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <form className="relative w-full max-w-xl flex items-center">
            <div className="relative flex-grow">
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
            </div>
          </form>
        </div>
       
      </nav>

        
      </div>
    </div>
  );
}
