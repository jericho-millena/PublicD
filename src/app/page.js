import React from "react";
import InfoList from "./components/infolist";
import Searchbar from "./components/searchbar";
import data from "../app/Data/data";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <InfoList data={data} />
      </div>
      <div>
        <Searchbar />
      </div>

      <div className="text-left">
        <h2 className="text-xl lg:text-2xl xl:text-3xl text-red-800 font-bold pt-12 px-10 pl-20">
          University <span className="text-red-500">Research </span>
          Statistics
        </h2>

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
    </>
  );
}
