import React from "react";
import InfoList from "./components/infolist";
import Searchbar from "./components/searchbar";
import BarGraph from "./components/bargraph";
import ActiveShapePieChart from "./components/ActiveShapePieChart";
import { data, data2, pieChartData } from "../app/Data/data";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <InfoList data={data} />
      </div>
      <div className="px-4 lg:px-0">
        {" "}
        <Searchbar />
      </div>

      <div className="flex justify-center">
        <div className="text-left">
          <h2 className="text-xl lg:text-2xl xl:text-3xl text-red-800 font-bold pt-12 px-10 pl-20">
            University <span className="text-red-500">Research </span>
            Statistics
          </h2>

          <div className="flex flex-col items-start">
            <ul className="list-none px-10 pl-20 pt-12">
              <li className="flex items-center mb-2">
                <div className="h-3 w-3 bg-red-900 rounded-full mr-2"></div>
                <span>Research paper</span>
              </li>
              <li className="flex items-center mb-2">
                <div className="h-3 w-3 bg-red-600 rounded-full mr-2"></div>
                <span>Projects</span>
              </li>
              <li className="flex items-center">
                <div className="h-3 w-3 bg-red-300 rounded-full mr-2"></div>
                <span>Activities</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center pt-8">
            <BarGraph />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-1 my-1">
        <InfoList data={data2} />
      </div>
      <div className="flex justify-center pt-1 mr-20">
        <ActiveShapePieChart data={pieChartData} />
      </div>
    </>
  );
}
