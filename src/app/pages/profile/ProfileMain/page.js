"use client";

import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance";
import PSideBar from "@/app/components/profile_components/PSideBar";
import ResearchActivityGrid from "@/app/components/profile_components/ResearchActivityGrid";
import YearSelector from "@/app/components/profile_components/YearSelector";
import ResearchChart from "@/app/components/profile_components/ResearchChart";
import ResearchSummary from "@/app/components/profile_components/ResearchSummary";
import AltmetricBadge from "@/app/components/profile_components/AltmetricBadge";
import ScopusRadarChart from "@/app/components/profile_components/ScopusRadarChart";
import ResearchOutputs from "@/app/components/profile_components/ResearchOutputs";

const ProfileMain = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const years = [2024, 2023, 2022, 2021];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full order-none lg:w-1/4">
        <PSideBar />
      </div>
      <div className="w-full lg:w-3/4 md:p-3 p-2 lg:p-4 order-none">
        <div className="py-2  ">
          <div className="py-5">
            <h1 className="text-lg lg:text-2xl text-black-800">
              Research activity per year
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchActivityGrid year={selectedYear} />
            </div>
            <div className="flex items-center justify-center w-full h-48">
              <YearSelector
                years={years}
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
              />
            </div>
          </div>
          <div className="pt-5 pb-8">
            <h1 class="text-lg lg:text-2xl text-black-800">
              Research output statistics{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchChart />
            </div>
            <div className="flex items-center justify-center w-full h-48 md:mt-2 col-span-3">
              <ResearchSummary />
            </div>
          </div>
          <div className="pt-10 pb-5">
            <h1 class="text-lg lg:text-2xl text-black-800">Performance </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center w-full h-58">
              <ScopusRadarChart />
            </div>
            <div className="flex items-center justify-center w-full h-58">
              <AltmetricBadge doi="	10.1038/s41433-023-02760-0" />
            </div>
          </div>
          <div className="flex items-start w-full mb-4">
            <ResearchOutputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
