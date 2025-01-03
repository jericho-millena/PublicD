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
  const [altmetricDoi, setAltmetricDoi] = useState(null);
  const [loadingDoi, setLoadingDoi] = useState(true);
  const [errorDoi, setErrorDoi] = useState(null);

  const years = [2024, 2023, 2022, 2021];

  useEffect(() => {
    // Fetch DOI for Altmetric badge
    const fetchDoi = async () => {
      try {
        const response = await axios.get("/altmetric-doi"); // Replace with your API endpoint
        setAltmetricDoi(response.data.doi); // Assuming API returns { doi: "DOI_STRING" }
      } catch (error) {
        setErrorDoi("Failed to load DOI for Altmetric Badge.");
      } finally {
        setLoadingDoi(false);
      }
    };

    fetchDoi();
  }, []);
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
            <h1 className="text-lg lg:text-2xl text-black-800">
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
            <h1 className="text-lg lg:text-2xl text-black-800">Performance </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center w-full h-58">
              <ScopusRadarChart />
            </div>
            <div className="flex items-center justify-center w-full h-58">
              {loadingDoi ? (
                <p>Loading Altmetric Badge...</p>
              ) : errorDoi ? (
                <p>{errorDoi}</p>
              ) : altmetricDoi ? (
                <AltmetricBadge doi={altmetricDoi} />
              ) : (
                <p>DOI not available for Altmetric Badge.</p>
              )}
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
