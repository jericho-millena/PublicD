"use client";

import React from "react";
import SideBar from "@/app/components/papers_component/Sidebar";
import ResearchActivity from "@/app/components/papers_component/ResearchActivity";
import PaperAuthors from "@/app/components/papers_component/PaperAuthors";

const PapersMain = () => {
  // Static Abstract text
  const abstractText =
    "The development of AI-driven cars represents a significant advancement in the field of autonomous transportation. This research paper explores the role of artificial intelligence in revolutionizing the automotive industry, particularly focusing on self-driving technology, machine learning algorithms, and vehicle autonomy. By analyzing the integration of sensors, computer vision, and real-time data processing, the study examines how AI systems enable vehicles to perceive their environment, make decisions, and navigate complex road conditions without human intervention. The paper also investigates the ethical, legal, and safety concerns associated with AI-driven cars, as well as the potential impact on urban mobility and the economy. Additionally, the research highlights ongoing challenges in achieving full autonomy, such as improving reliability, addressing regulatory frameworks, and ensuring cybersecurity. Overall, this study provides a comprehensive overview of the current state of AI-driven car technologies and explores the future implications of their widespread adoption in transforming transportation systems worldwide.";

  // Static Publication Details
  const details = [
    { label: "Language", value: "English" },
    { label: "Article Number", value: "36" },
    { label: "Journal", value: "Lorem Ipsum Archives of Electronics" },
    { label: "Volume", value: "40" },
    { label: "Issue Number", value: "1" },
    { label: "Publication Status", value: "Not yet published" },
  ];

  // Static Authors data
  const authors = [
    {
      name: "John Doe ",
      degree: "Doctorate Degree in Computer Science",
      researchUnit: "Batangas State University-Alangilan Campus",
      image: "/RProfile.png",
    },
    {
      name: "Jane Smith",
      degree: "Master's Degree in Artificial Intelligence",
      researchUnit: "Kist Park",
      image: "/PublicD/RProfile.png",
    },
    {
      name: "Robert Johnson",
      degree: "Bachelor's Degree in Software Engineering",
      researchUnitesearchUnit: "VIP Corals",
      image: "/PublicD/RProfile.png",
    },
    {
      name: "Emily Davis",
      degree: "PhD in Data Science",
      researchUnit: "Kist Park",
      image: "/PublicD/RProfile.png",
    },
    {
      name: "Michael Brown",
      degree: "Master's Degree in Information Technology",
      researchUnit: "Kist Park",
      image: "/PublicD/RProfile.png",
    },
    {
      name: "Sophia Wilson",
      degree: "Bachelor's Degree in Computer Engineering",
      researchUnit: "Pablo Borbon",
      image: "/PublicD/RProfile.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <SideBar />
      </div>

      <div className="w-full lg:w-3/4 px-4 md:px-4 lg:px-14">
        <div className="py-2">
          {/* Research Activity */}
          <div className="pt-5">
            <h1 className="text-md md:text-lg lg:text-2xl font-semibold text-black-800">
              Research activity within the year
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 lg:mt-5">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchActivity />
            </div>
          </div>

          {/* Abstract */}
          <div className="pt-5 pb-8">
            <h1 className="mt-10 text-md md:text-lg font-semibold lg:text-2xl text-black-800 pb-5">
              Abstract
            </h1>
            <p className="text-sm md:text-md lg:text-lg text-black-800">
              {abstractText}
            </p>
          </div>

          {/* Publication Details */}
          <div className="flex flex-col justify-between gap-4">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex justify-between sm:gap-12 w-full"
              >
                <span className="font-medium text-sm md:text-md lg:text-lg text-gray-600 w-1/2">
                  {detail.label}
                </span>
                <span className="text-gray-900 text-sm md:text-md lg:text-lg w-1/2">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
          {/* About the Authors */}
          <div className="pt-5 pb-8">
            <h1 className="mt-20 text-2xl text-black-800">About the Authors</h1>
            <PaperAuthors authors={authors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapersMain;
