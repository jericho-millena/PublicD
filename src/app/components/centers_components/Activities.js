import React, { useEffect, useState } from "react";
import axios from "axios";

const Activities = () => {
  const [activityData, setActivityData] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/activities"); // Replace with your API endpoint

        // Assuming data structure:
        // { activities: [...], projects: [...] }
        const { activities, projects } = response.data;

        setActivityData(activities);
        setProjectDetails(projects);
      } catch (err) {
        setError("Failed to load activities data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="activities">
      {/* Activity Cards in One Line */}
      <div className="flex justify-end mt-4 gap-6">
        {activityData.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[150px] h-[90px] bg-[#effff] px-[10px] py-[10px] border-l-[2px] border-black"
          >
            <span className="text-black text-[14px] sm:text-[16px] md:text-[20px]">
              {activity.count}
            </span>
            <div className="font-lato text-[8px] sm:text-[10px] md:text-[12px] text-[#333333]">
              {activity.label}
            </div>
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div className="mt-6">
        {projectDetails.map((project, index) => (
          <div key={index} className="project-details mt-6">
            <div className="font-lato text-[#333333] text-[20px] sm:text-[25px]">
              {project.projectName}
            </div>
            <p className="text-justify text-[12px] sm:text-[15px] text-gray-500">
              {project.speaker}
            </p>
            <p className="text-justify text-[12px] sm:text-[15px] text-black">
              {project.date} <br />
              Activity: {project.activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
