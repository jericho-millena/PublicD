// components/KistPark.js

import React from "react";

const KistPark = () => {
  return (
    <div className="mr-20 mt-20 ml-20">
      {/* Search Section */}
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

      {/* KIST Park Image and Description */}

      <div className="mr-20 mt-20 ml-20">
        <img
          src="/socials/kist1.png"
          alt="Research Icon"
          className="h-120 w-full object-cover mb-4"
        />
        <p className="text-gray-600 text-justify">
          The Knowledge, Innovation, and Science Technology (KIST) Park is a
          pioneering economic zone established by Batangas State University
          (BatStateU). It aims to foster collaboration between academia and
          industry, promote technological innovation...
        </p>
        <br />
        <hr className="mt-4 border-t-2 border-gray-300" />
        <br />
      </div>
    </div>
  );
};

export default KistPark;
