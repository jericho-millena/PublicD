"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Component from "@/app/components/project_components/DocumentLink";
import Output from "@/app/components/project_components/PreviewOfOutput";
import ProjectStatus from "@/app/components/project_components/ProjectStatus";
import ScrollingBarChart from "@/app/components/project_components/ScrollingBarChart";
import Author from "@/app/components/project_components/Authors";
import FundingPage from "@/app/components/project_components/Fundings";
import Description from "@/app/components/project_components/Description";
import Progress from "@/app/components/project_components/Progress";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function ProjectMain() {
  const [projectData, setProjectData] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectResponse = await axios.get("/api/project"); // Adjust the endpoint
        const authorsResponse = await axios.get("/api/authors"); // Adjust the endpoint
        const progressResponse = await axios.get("/api/project/progress"); // Adjust the endpoint

        // Assuming the API responses have the following structure
        setProjectData(projectResponse.data);
        setAuthors(authorsResponse.data);
        setProgressPercentage(progressResponse.data.percentage);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="flex justify-end mb-2 my-5 mx-10 pr-4">
        <div className="flex items-center w-96 border border-gray-400 text-gray-700 rounded-lg shadow-md bg-white hover:bg-gray-200">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 105.293 13.707l3.414 3.414a1 1 0 001.414-1.414l-3.414-3.414A8 8 0 0010 2zM5 10a5 5 0 1110 0A5 5 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="p-4 center mx-10 my-2">
        <div className="p-4">
          <div className="grid grid-cols-[5fr_2fr] gap-4 mb-4">
            <div className="flex items-center justify-start h-48 dark:bg-gray-800 px-4">
              <div className="flex items-center">
                <Progress
                  percentage={progressPercentage} // Dynamic progress value
                  label="Project Progress"
                  width={120}
                  height={120}
                  strokeWidth={20}
                />

                <div className="ml-6 text-gray-700 dark:text-gray-300 mb-20 mt-35">
                  <h1 className="text-2xl font-semibold mt-20">
                    {projectData?.name} {/* Dynamic project name */}
                  </h1>
                  <p className="text-lg mt-5">
                    {authors.length > 0
                      ? authors.map((author) => author.name).join(", ")
                      : "Authors..."}{" "}
                    {/* Dynamic authors */}
                  </p>
                  <div className="flex items-center mt-10">
                    <HiBuildingOffice2 className="text-xl mr-2" />
                    <p className="text-lg">
                      {projectData?.location} {/* Dynamic project location */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end pr-2 pt-12 h-48">
              <ProjectStatus
                status={projectData?.status || "Ongoing"} // Dynamic project status
                started={projectData?.started || "N/A"} // Dynamic project start date
                expectedCompletion={projectData?.expectedCompletion || "N/A"} // Dynamic expected completion
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-48 mb-4">
            <ScrollingBarChart />
          </div>

          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Description
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8">
              <Description content={projectData?.description} />{" "}
              {/* Dynamic project description */}
              <div>
                <Component />
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <Output />
        </div>

        <Author />
        <div>
          <FundingPage />
        </div>
      </div>
    </main>
  );
}
