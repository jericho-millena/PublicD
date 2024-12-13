"use client";

import React, { useState } from "react";
import Progressbar from "./Progressbar";
import ResearchStatistics from "./ResearchStatistics";
import PapersChart from "./PapersChart";
import AltmetricBadges from "./AltmetricBadges";
import DownloadPDF from "./downloadPdf";

export default function SideBar() {
  const percentage = 66; // Example percentage value

  // Example list of top countries by views
  const topCountries = [
    { country: "Philippines", views: 10 },
    { country: "United Kingdom", views: 0 },
    { country: "Canada", views: 0 },
    { country: "Australia", views: 0 },
    { country: "Germany", views: 0 },
  ];

  const doi = "10.1016/S0140-6736(11)61619-x"; // Example DOI

  return (
    <aside
      id="logo-sidebar"
      className="flex flex-col md:flex-row top-40 left-0 z-40 w-full md:w-70 h-auto border-b-2 border-gray-200 border-r-2"
      aria-label="Sidebar"
    >
      <div className="h-full p-6 bg-white w-full">
        <span className="flex items-center py-2 text-3xl mt-4 text-gray-900 rounded-lg border-gray-300">
          AI Driven Cars
        </span>
        <span className="flex items-center py-2 text-sm text-slate-800 rounded-lg mt-4">
          John Doe
        </span>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 mt-9">
          <div className="flex items-center justify-center w-full h-28 col-span-2">
            <Progressbar percentage={percentage} width={100} height={120} />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4 mr-10">
            <div className="flex items-center w-full h-28 col-span-5">
              <div className="grid grid-cols-3 gap-20 ml-6">
                <div className="flex items-center justify-center w-full h-28 col-span-2">
                  {/* Insert the AltmetricBadge here */}
                  <AltmetricBadges doi={doi} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other sections and components... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Research Statistics
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4 mt-6 ml-8">
          <div className="items-center rounded w-full h-28">
            <ResearchStatistics
              percentage={percentage}
              width={90}
              height={120}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-xl mt-9 mb-10 text-gray-900 rounded-lg border-gray-300">
              Downloads and Views per Month
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center justify-center rounded w-full h-60 col-span-2">
            <PapersChart />
          </div>
        </div>

        {/* Top countries table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-t-2 border-l-2 border-r-2 border-b-2 border-gray-600">
          <div className="flex items-center justify-center w-full h-auto col-span-2">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th
                    className="text-center py-3 px-4 font-semibold text-l border-b border-gray-400"
                    colSpan="2"
                  >
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

        {/* Download Link and Other Related Files */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col justify-center mt-6">
            <span className="flex items-center py-2 text-2xl text-gray-900 rounded-lg border-gray-300">
              Download Link
            </span>
            <div className="text-m text-black-800">
              <DownloadPDF />{" "}
            </div>

            <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
              Other related files
            </span>
            <div className="text-s text-black-800 mt-2">
              <span className="semi-bold">https://www.figma.com/file/...</span>
            </div>
            <div className="text-s text-black-800 mt-2">
              <span className="semi-bold">https://www.figma.com/file/...</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
