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
    </>
  );
}
