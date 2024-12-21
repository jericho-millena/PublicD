import React from "react";

export default function Component() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-3 lg:space-y-6">
      <div className="space-y-2">
        <h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-900">
          Document Link
        </h2>
        {/* Fixed: Removed nested <a> tag */}
        <a
          href="https://www.figma.com/file/..."
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          {/* Changed to an <svg> or icon element */}
          <svg
            className="h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 6.825L15.3 8.25 9.75 13.8v1.8h1.8l5.55-5.55 1.425 1.425m1.125-4.2c.55.55.55 1.45 0 2l-6 6H8.25v-4.125l6-6c.55-.55 1.45-.55 2 0Z"
            />
          </svg>
          <span className="text-sm">https://www.figma.com/file/...</span>
        </a>
      </div>

      <div className="space-y-3">
        <h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-900">
          Topics
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs lg:text-sm font-medium rounded-full">
            Industry, Innovation, & Infrastructure
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs lg:text-sm font-medium rounded-full">
            Algorithms
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs lg:text-sm font-medium rounded-full">
            Design
          </span>
        </div>
      </div>
    </div>
  );
}
