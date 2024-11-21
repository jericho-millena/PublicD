import React from "react";

const Activities = () => {
  const activityData = [
    { count: 1234, label: "Reviewed Article" },
    { count: 90, label: "Hosting Event" },
    { count: 9012, label: "Oral Presentation" },
    { count: 123, label: "Invited Talk" },
  ];

  const projectDetails = [
    {
      projectName: "Project Name / Title",
      speaker: "John Doe (Speaker)",
      date: "April 12, 2023",
      activity: "Invited Talk",
    },
    {
      projectName: "Project Name / Title",
      speaker: "John Doe (Speaker)",
      date: "April 12, 2023",
      activity: "Invited Talk",
    },
  ];

  return (
    <div className="activities">
      {/* Header */}
      <h1 className="font-lato text-2xl flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3M3 9h18M4 5h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
          />
        </svg>
        Activities
      </h1>

      {/* Activity Cards */}
      <div className="flex justify-end mt-[-45px] mr-10">
        <div className="flex gap-4">
          {activityData.map((activity, index) => (
            <div key={index} className="text-center">
              <div className="w-[200px] h-[100px] bg-[#effff] px-[20px] py-[10px] border-l-[2.5px] border-black flex flex-col justify-center">
                <span className="text-black text-[25px]">{activity.count}</span>
                <div className="font-lato text-[15px] text-[#333333]">
                  {activity.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details */}
      {projectDetails.map((project, index) => (
        <div key={index} className="project-details mt-6">
          <div className="font-lato text-[#333333] text-[25px]">
            {project.projectName}
          </div>
          <p className="text-justify text-[15px] text-gray-500">
            {project.speaker}
          </p>
          <p className="text-justify text-[15px] text-black">
            {project.date} <br />
            Activity: {project.activity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Activities;