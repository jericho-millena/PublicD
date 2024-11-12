import React from "react";
import Progressbar from "./Progressbar"; // Import the Progressbar component
import ResearchStatistics from "./ResearchStatistics";
import PapersChart from "./Paperschart";

export default function SideBar() {
  const percentage = 66; // Example percentage value

  return (
    <aside
      id="logo-sidebar"
      className="flex top-30 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-300"
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
        <div class="grid grid-cols-2 gap-4">
            <div class=" justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-2xl mt-9 text-gray-900 rounded-lg border-gray-300">
          Research Statistics</span> </div></div>

          <div className="grid grid-cols-1 gap-4 mb-4 mt-6">
          <div className="items-center rounded w-full h-28">
            {/* Add Progressbar and apply fit background */}
            <ResearchStatistics percentage={percentage} width={90} height={120} />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class=" justify-center w-full h-28 col-span-2">
            <span className="flex items-center py-2 text-xl mt-9 text-gray-900 rounded-lg border-gray-300">
          Downloads and Views per Month</span> </div></div>


          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded col-span-2">
            <PapersChart />
            </div>
            </div>
        
          

      </div>

        
    </aside>
  );
}
