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
        <div>
          <h2 className="text-2xl font-semibold mb-4">Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleResearchers.map((researcher) => (
              <Researchers key={researcher.id} user={researcher} />
            ))}
          </div>

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
        <div>
          <h2 className="text-2xl font-semibold mb-4">Research Outputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {visibleResearchOutputs.map((research) => (
              <ResearchOutput key={research.id} user={research} />
            ))}
          </div>

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
        <div>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {visibleProjects.map((project) => (
              <Projects key={project.id} project={project} />
            ))}
          </div>

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
        <Activities activities={visibleActivities} /> {/* Pass visibleActivities to Activities */}

        {/* Show More or Show Less for Activities */}
        <ShowMoreActivities
          isExpanded={isActivitiesExpanded}
          onToggle={handleActivitiesToggle} // Pass the toggle function
        />
        <hr className="mt-4 border-t-2 border-gray-300" />

        {/* News / Media Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">News / Media</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10">
            {visibleArticles.map((article, index) => (
              <NewsMedia key={`${article.id}-${index}`} user={article} />
            ))}
          </div>

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
        <div>
          <h2 className="text-2xl font-semibold mb-4">Prizes</h2>
          <Prizes /> {/* Add Prizes Component */}
          <br />
          <hr className="mt-4 border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default CenterMain;
