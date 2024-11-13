import React from "react";
import Progressbar from "./Progressbar"; // Import the Progressbar component
import ResearchStatistics from "./ResearchStatistics";
import PapersChart from "./PapersChart";

export default function SideBar() {
  const percentage = 66; // Example percentage value

  // Example list of top countries by views
  const topCountries = [
    { country: "United States", views: 1200 },
    { country: "United Kingdom", views: 800 },
    { country: "Canada", views: 600 },
    { country: "Australia", views: 500 },
    { country: "Germany", views: 400 },
  ];

  return (
    <aside
      id="logo-sidebar"
      className="flex top-30 left-0 z-40 w-96 h-70 sm:translate-x-0 border-r-2 border-gray-300"
      aria-label="Sidebar"
    >
      <div className="h-full p-6 overflow-y-auto bg-white-300">
        <span className="flex items-center py-2 text-3xl mt-4 text-gray-900 rounded-lg border-b-2 border-gray-300">
          Research name / title
        </span>
        <span className="flex items-center py-2 text-sm text-slate-800 rounded-lg mt-4">
          Authors... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          non lorem non lorem gravida imperdiet non at elit. Suspendisse rhoncus ipsum quis risus.
        </span>

        <div className="grid grid-cols-1 gap-4 mb-4 mt-6">
          <div className="items-center rounded w-full h-28">
            
            {/* Add Progressbar and apply fit background */}
            <Progressbar percentage={percentage} width={120} height={120} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Research Statistics
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4 mt-6">
          <div className="items-center rounded w-full h-28">
            <ResearchStatistics percentage={percentage} width={90} height={120} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Downloads and Views per Month
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded w-50 h-60 col-span-2">
            <PapersChart />
          </div>
        </div>

        {/* Top countries table */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center w-full h-auto col-span-2">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-center py-3 px-4 font-semibold text-l border-b border-gray-300">
                    Top Countries per View
                  </th>
                </tr>
              </thead>
              <tbody>
                {topCountries.map((country, index) => (
                  <tr key={index}>
                    <td className="text-left py-2 px-4 border-b border-gray-300">
                      {country.country}
                    </td>
                    <td className="text-right py-2 px-4 border-b border-gray-300">
                      {country.views} views
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center w-full h-28 col-span-2 mt-11">
            <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Download Link
            </span>
              <div className="text-m text-black-800"><span className="semi-bold"></span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">https://www.figma.com/file/...</span></div>
              <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Other related files </span>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">https://www.figma.com/file/...</span></div>
              <div className="text-s text-black-800 mt-2"><span className="semi-bold">https://www.figma.com/file/...</span></div>
            </div>
            </div>
        
      </div>
    </aside>
  );
}
