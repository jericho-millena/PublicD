import React from "react";
import InfoList from "./components/infolist";
import Searchbar from "./components/searchbar";
import BarGraph from "./components/home_components/bargraph";
import ActiveShapePieChart from "./components/home_components/PieChart";
import SDGCard from "./components/home_components/SDGCard";
import Footer from "./components/home_components/footer";
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

      <div className="container mx-auto px-2">
        <div className="flex justify-center my-5 relative">
          <div className="z-10 relative">
            <h2 className="text-lg lg:text-xl xl:text-2xl text-red-800 font-bold mb-5 lg:mb-7 xl:mb-7 pt-5 lg:pt-7 xl:pt-7">
              University <span className="text-red-500">Research </span>
              Statistics
            </h2>
            <div className="flex flex-col items-start">
              <ul className="list-disc list-inside">
                <li className="flex items-center mb-2 lg:mb-3 xl:mb-3">
                  <div className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 bg-red-900 rounded-full mr-2"></div>
                  <span className="text-xs lg:text-sm xl:text-base">
                    Research paper
                  </span>
                </li>
                <li className="flex items-center mb-2 lg:mb-3 xl:mb-3">
                  <div className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-xs lg:text-sm xl:text-base">
                    Projects
                  </span>
                </li>
                <li className="flex items-center mb-2 lg:mb-3 xl:mb-3">
                  <div className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 bg-red-300 rounded-full mr-2"></div>
                  <span className="text-xs lg:text-sm xl:text-base">
                    Activities
                  </span>
                </li>
              </ul>
            </div>
            <BarGraph />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="container my-1">
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
      <div>
        <Footer />
      </div>
    </>
  );
}
