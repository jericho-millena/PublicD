"use client";

import React from "react";
import SideBar from "@/app/components/papers_component/Sidebar";
import ResearchActivity from "@/app/components/papers_component/ResearchActivity";
import ShowMoreButtonP from "@/app/components/papers_component/ShowMoreButtonP";

const PapersMain = () => {
  // Static Abstract text
  const abstractText =
    "The development of AI-driven cars represents a significant advancement in the field of autonomous transportation. This research paper explores the role of artificial intelligence in revolutionizing the automotive industry, particularly focusing on self-driving technology, machine learning algorithms, and vehicle autonomy. By analyzing the integration of sensors, computer vision, and real-time data processing, the study examines how AI systems enable vehicles to perceive their environment, make decisions, and navigate complex road conditions without human intervention. The paper also investigates the ethical, legal, and safety concerns associated with AI-driven cars, as well as the potential impact on urban mobility and the economy. Additionally, the research highlights ongoing challenges in achieving full autonomy, such as improving reliability, addressing regulatory frameworks, and ensuring cybersecurity. Overall, this study provides a comprehensive overview of the current state of AI-driven car technologies and explores the future implications of their widespread adoption in transforming transportation systems worldwide.";

  // Static Publication Details
  const publicationDetails = [
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
      university: "Batangas State University-Alangilan Campus",
      image: "/PublicD/RProfile.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <SideBar />
      </div>

      <div className="w-full lg:w-3/4 p-4">
        <div className="py-2">
          {/* Research Activity */}
          <div className="py-5">
            <h1 className="text-2xl text-black-800">
              Research activity within the year (142)
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-10">
            <div className="flex items-center justify-center w-full h-48 col-span-2">
              <ResearchActivity />
            </div>
          </div>

          {/* Abstract */}
          <div className="pt-5 pb-8">
            <h1 className="mt-20 text-2xl text-black-800">Abstract</h1>
            <p className="text-s text-black-800">{abstractText}</p>
          </div>

          {/* Publication Details */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col justify-center w-full h-28 col-span-2 mt-11">
              <div className="text-m text-black-800">
                <span className="semi-bold">Language</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Article Number</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Journal</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Volume</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Issue Number</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Publication Status</span>
              </div>
            </div>

            <div className="flex flex-col justify-center w-full h-28 col-span-2 mt-11">
              <div className="text-m text-black-800">
                <span className="semi-bold">English</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">36</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">
                  Lorem Ipsum Archives of Electronics
                </span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">40</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">1</span>
              </div>
              <div className="text-s text-black-800 mt-2">
                <span className="semi-bold">Not yet published</span>
              </div>
            </div>
          </div>

          {/* About the Authors */}
          <div className="pt-5 pb-8">
            <h1 className="mt-20 text-2xl text-black-800">About the Authors</h1>
            {/* ShowMoreButtonP component to handle visibility of authors */}
            <ShowMoreButtonP authors={authors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapersMain;