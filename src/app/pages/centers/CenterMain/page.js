"use client";

import React, { useState } from "react";
import CenterSideBar from "@/app/components/centers_components/CenterSidebar";
import KistPark from "@/app/components/centers_components/KistPark";
import ShowMoreResearchers from "@/app/components/centers_components/ShowMoreResearchers";
import Researchers from "@/app/components/centers_components/Researchers";
import { user } from "@/app/Data/data";
import { users } from "@/app/Data/data2";
import ResearchOutput from "@/app/components/centers_components/ResearchOutput";
import ShowMoreResearchOutput from "@/app/components/centers_components/ShowMoreResearchOutput";
import { userss } from "@/app/Data/data3";
import Projects from "@/app/components/centers_components/Projects";
import ShowMoreProjects from "@/app/components/centers_components/ShowMoreProjects";
import NewsMedia from "@/app/components/centers_components/NewsMedia";
import ShowMoreArticles from "@/app/components/centers_components/ShowMoreArticles";
import { user1 } from "@/app/Data/data6"; // Import data6.js for NewsMedia
import Activities from "@/app/components/centers_components/Activities"; // Import Activities
import ShowMoreActivities from "@/app/components/centers_components/ShowMoreActivities"; // Import ShowMoreActivities
import Prizes from "@/app/components/centers_components/Prizes"; // Import Prizes component

// Define activity data (just as an example)
const activityData = [
  { id: 1, title: "Activity 1", description: "Description of activity 1" },
  { id: 2, title: "Activity 2", description: "Description of activity 2" },
  { id: 3, title: "Activity 3", description: "Description of activity 3" },
  { id: 4, title: "Activity 4", description: "Description of activity 4" },
  { id: 5, title: "Activity 5", description: "Description of activity 5" },
];

const CenterMain = () => {
  const [isResearchersExpanded, setIsResearchersExpanded] = useState(false);
  const [isResearchOutputExpanded, setIsResearchOutputExpanded] = useState(false);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [isArticlesExpanded, setIsArticlesExpanded] = useState(false); // For articles expansion
  const [isActivitiesExpanded, setIsActivitiesExpanded] = useState(false); // For activities expansion

  // Show only 6 researchers initially, or all if expanded
  const visibleResearchers = isResearchersExpanded ? user : user.slice(0, 6);

  // Slice the users for research outputs
  const visibleResearchOutputs = isResearchOutputExpanded ? users : users.slice(0, 2);

  // Slice the users for projects
  const visibleProjects = isProjectsExpanded ? userss : userss.slice(0, 2);

  // Slice the articles for NewsMedia section (using user1 from data6.js)
  const visibleArticles = isArticlesExpanded ? user1 : user1.slice(0, 2);

  // Slice the activities for Activities section
  const visibleActivities = isActivitiesExpanded ? activityData : activityData.slice(0, 2);

  // Function to handle toggling articles expansion
  const handleArticlesToggle = () => {
    setIsArticlesExpanded((prev) => !prev); // Toggle the expanded state for articles
  };

  // Function to handle toggling activities expansion
  const handleActivitiesToggle = () => {
    setIsActivitiesExpanded((prev) => !prev); // Toggle the expanded state for activities
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <CenterSideBar />
      </div>

      <div className="flex-grow relative">
        {/* KistPark Component */}
        <KistPark />

        {/* Researchers Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z"
              />
            </svg>
            Researchers
          </h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleResearchers.map((researcher) => (
              <Researchers key={researcher.id} user={researcher} />
            ))}
          </div>
          <br />
          {/* Show More or Show Less for Researchers */}
          <ShowMoreResearchers
            isExpanded={isResearchersExpanded}
            onToggle={() => setIsResearchersExpanded(!isResearchersExpanded)}
          />
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br />
        </div>

        {/* Research Output Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                d="M6 2h12c1.1 0 1.99.89 1.99 2L20 18c0 1.1-.89 2-1.99 2H6c-1.1 0-1.99-.89-1.99-2L4 4c0-1.1.89-2 1.99-2zM6 4v12h12V4H6z"
              />
            </svg>
            Research Output
          </h2>
          <div className="flex justify-end mt-[-45px] mr-10">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">9012</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Articles
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                  <span className="text-black text-[25px]">123</span>
                  <div className="font-lato text-[15px] text-[#333333]">
                    Review Articles
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {visibleResearchOutputs.map((research) => (
              <ResearchOutput key={research.id} user={research} />
            ))}
          </div>
          <br />
          {/* Show More or Show Less for Research Outputs */}
          <ShowMoreResearchOutput
            isExpanded={isResearchOutputExpanded}
            onToggle={() => setIsResearchOutputExpanded(!isResearchOutputExpanded)}
          />
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br />
        </div>

        {/* Projects Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.8L18 7v6.4l-6 3V9l6-3V4.8zm0 0L6 7v6.4l6 3V9l-6-3V4.8z"
              />
            </svg>
            Projects
          </h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {visibleProjects.map((project) => (
              <Projects key={project.id} project={project} />
            ))}
          </div>
          <br />
          {/* Show More or Show Less for Projects */}
          <ShowMoreProjects
            isExpanded={isProjectsExpanded}
            onToggle={() => setIsProjectsExpanded(!isProjectsExpanded)}
          />
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br />
        </div>

        {/* Activities Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                d="M19 3h-2V2H7v1H5c-1.1 0-1.99.89-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 1.99-.89 1.99-2L21 5c0-1.1-.89-2-1.99-2zm-2 2v2H7V5h10zM5 19V9h14v10H5z"
              />
            </svg>
            Activities
          </h2>
          <br />
          <Activities activities={visibleActivities} /> {/* Pass visibleActivities to Activities */}
          {/* Show More or Show Less for Activities */}
          <ShowMoreActivities
            isExpanded={isActivitiesExpanded}
            onToggle={handleActivitiesToggle} // Pass the toggle function
          />
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br />
        </div>

        {/* News / Media Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                 d="M4 2C3.45 2 3 2.45 3 3v18c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4zm16 18H4V4h16v16zM6 6h12v2H6zm0 4h12v2H6zm0 4h12v2H6z"
              />
            </svg>
            News/Media
          </h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
            {visibleArticles.map((article, index) => (
              <NewsMedia key={`${article.id}-${index}`} user={article} />
            ))}
          </div>
          <br />
          {/* Show More or Show Less for Articles */}
          <ShowMoreArticles
            isExpanded={isArticlesExpanded}
            onToggle={handleArticlesToggle} // Pass the toggle function
          />
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
          <br />
        </div>

        {/* Prizes Section */}
        <div className="mx-4 md:mx-8 lg:mx-12">
          <h2 className="text-3xl mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9 text-gray-700 mr-2"
            >
              <path
                 d="M12 2C7.03 2 3 6.03 3 10c0 3.58 2.61 6.6 6 7.6V21h6v-3.4c3.39-1 6-4.02 6-7.6 0-3.97-4.03-8-9-8zm-1 14v-2h2v2h-2zm-4-4c0-.83.67-1.5 1.5-1.5S10 12.17 10 13s-.67 1.5-1.5 1.5S7 13.83 7 13zm8 0c0-.83.67-1.5 1.5-1.5S18 12.17 18 13s-.67 1.5-1.5 1.5S15 13.83 15 13z"
                 />
            </svg>
            Prizes
          </h2>
          <br />
          <Prizes /> {/* Add Prizes Component */}
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default CenterMain;
