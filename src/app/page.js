import React from "react";
import InfoList from "./components/infolist";
import Searchbar from "./components/searchbar";
import BarGraph from "./components/bargraph";
import ActiveShapePieChart from "./components/ActiveShapePieChart";
import SDGCard from "./components/SDGCard";
import { data, data2, pieChartData, sdgData } from "../app/Data/data";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <InfoList data={data} />
      </div>
      <div className="px-4 lg:px-0">
        <Searchbar />
      </div>

      <div className="flex justify-center my-5 relative">
        <div className="z-10 relative">
          <h2 className="text-xl lg:text-2xl xl:text-3xl text-red-800 font-bold mb-7 pt-7">
            University <span className="text-red-500">Research </span>
            Statistics
          </h2>
          <div className="flex flex-col items-start">
            <ul className="list-disc list-inside">
              <li className="flex items-center mb-2">
                <div className="h-4 w-4 bg-red-900 rounded-full mr-2"></div>
                <span>Research paper</span>
              </li>
              <li className="flex items-center mb-2">
                <div className="h-4 w-4 bg-red-600 rounded-full mr-2"></div>
                <span>Projects</span>
              </li>
              <li className="flex items-center mb-2">
                <div className="h-4 w-4 bg-red-300 rounded-full mr-2"></div>
                <span>Activities</span>
              </li>
            </ul>
          </div>
          <BarGraph />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="container mx-20 my-1">
          <InfoList data={data2} />
        </div>
      </div>

      <div className="flex justify-center">
        <ActiveShapePieChart data={pieChartData} />
      </div>
      <div className="container mx-auto px-4">
        <div>
          <SDGCard sdgData={sdgData} />
        </div>
      </div>
      {/* Background image at the bottom */}
      <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/rec223.png"
          alt="Background Image"
          className="absolute w-1/2 h-auto object-cover"
          style={{ bottom: 0, left: 0, zIndex: -1 }}
        />
      </div>
    </>
  );
}
