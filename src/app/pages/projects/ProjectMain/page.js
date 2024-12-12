"use client";

import React from "react";
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
  const sampleText =
    "This project focuses on developing cutting-edge solutions to harness renewable energy more efficiently and sustainably. It aims to innovate in areas such as solar, wind, and geothermal energy systems, integrating advanced technologies to optimize energy production, reduce environmental impact, and promote a cleaner, greener future.";

  const projectData = {
    status: "Ongoing",
    started: "04 / 12 / 23",
    expectedCompletion: "04 / 12 / 23",
  };

  const percentage = 20.5;

  return (
    <main>
      <div className="p-4 center mx-10 my-2">
        <div className="p-4">
          <div className="grid grid-cols-[5fr_2fr] gap-4 mb-4">
            <div className="flex items-center justify-start h-48 dark:bg-gray-800 px-4">
              <div className="flex items-center">
                <Progress
                  percentage={percentage}
                  label="Project Progress"
                  width={120}
                  height={120}
                  strokeWidth={20}
                />

                <div className="ml-6 text-gray-700 dark:text-gray-300 mb-20 mt-35">
                  <h1 className="text-2xl font-semibold mt-20">
                    Advance Renewable Energy technologies
                  </h1>
                  <p className="text-lg mt-5 ">John Doe </p>
                  <div className="flex items-center mt-10">
                    <HiBuildingOffice2 className="text-xl mr-2" />
                    <p className="text-lg">
                      Knowledge, Innovation, and Science Technology (KIST) Park
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end pr-2 pt-12 h-48">
              <ProjectStatus
                status={projectData.status}
                started={projectData.started}
                expectedCompletion={projectData.expectedCompletion}
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-48 mb-4 ">
            <ScrollingBarChart />
          </div>
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Description
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8">
              <Description content={sampleText} />
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
