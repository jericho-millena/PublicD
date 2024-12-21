"use client";

import React, { useState } from "react";
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
  // Hardcoded project data
  const projectData = {
    name: "AI in Autonomous Vehicles",
    location: "KIST Park",
    status: "Ongoing",
    started: "January 2023",
    expectedCompletion: "December 2025",
    description:
      "This project focuses on the development of AI-driven autonomous vehicles, which will enhance safety, efficiency, and the overall driving experience.",
  };

  // Hardcoded authors data
  const authors = [
    { name: "Dr. John Doe" },
    { name: "Dr. Jane Smith" },
    { name: "Dr. Mike Johnson" },
  ];

  // Hardcoded progress percentage
  const progressPercentage = 65;

  return (
    <main>
      <div className="lg:p-8 center mx-5 lg:mx-10 my-2">
        <div className="grid lg:grid-cols-[5fr_2fr] gap-4 lg:mb-4">
          <div className="flex items-center justify-start h-36 lg:h-48 dark:bg-gray-800 px-4">
            <div className="flex items-center">
              <Progress
                percentage={progressPercentage} // Dynamic progress value
                label="Project Progress"
                width={120}
                height={120}
                strokeWidth={20}
              />

              <div className="ml-6 text-gray-700 dark:text-gray-300 mb-20">
                <h1 className="text-md md:text-lg lg:text-2xl font-semibold mt-20">
                  {projectData.name} {/* Dynamic project name */}
                </h1>
                <p className="text-xs md:text-sm lg:text-lg mt-5">
                  {authors.length > 0
                    ? authors.map((author) => author.name).join(", ")
                    : "Authors..."}{" "}
                  {/* Dynamic authors */}
                </p>
                <div className="flex items-center lg:mt-5">
                  <HiBuildingOffice2 className="text-sm md:text-md lg:text-xl mr-2" />
                  <p className="text-sm md:text-md lg:text-xl">
                    {projectData.location} {/* Dynamic project location */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start lg:justify-end pr-2 pt-2 lg:pt-12 h-24 md:h-36 lg:h-48 mb-5">
            <ProjectStatus
              status={projectData.status || "Ongoing"} // Dynamic project status
              started={projectData.started || "N/A"} // Dynamic project start date
              expectedCompletion={projectData.expectedCompletion || "N/A"} // Dynamic expected completion
            />
          </div>
        </div>

        <div className="flex items-center justify-center h-48 mb-4">
          <ScrollingBarChart />
        </div>

        <div className="container mx-auto pt-12">
          <h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-800 md:mb-3 lg:mb-6">
            Description
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8">
            <Description content={projectData.description} />{" "}
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
      <div>
        <Author />
      </div>
      <div>
        <h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-800 md:mb-3 lg:mb-6 px-4">
          Fundings
        </h2>
        <FundingPage />
      </div>
    </main>
  );
}
