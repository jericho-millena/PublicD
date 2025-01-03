import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data); // Assuming API returns an array
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center space-y-4">
      {projects.map((project) => {
        const radius = 30;
        const circumference = 2 * Math.PI * radius;
        const progressLength = (project.progress / 100) * circumference;
        const remainingLength = circumference - progressLength;

        return (
          <a
            key={project.id}
            href={`/pages/projects/${project.id}`} // Use project ID for dynamic link
            className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl"
          >
            {/* Progress Circle */}
            <div className="flex-none mr-4">
              <div className="w-20 h-20 relative">
                {/* Background circle */}
                <svg className="absolute" width="100%" height="100%">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    stroke="gray"
                    strokeWidth="4"
                  />
                </svg>
                {/* Progress arc starting at the top */}
                <svg
                  className="absolute"
                  width="100%"
                  height="100%"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    stroke="red"
                    strokeWidth="4"
                    strokeDasharray={`${progressLength} ${remainingLength}`}
                  />
                </svg>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500">
                  {project.progress}%
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow">
              <div className="text-left mb-2">
                <div className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </div>
                <p className="text-gray-600 mb-2 text-xs">{project.researchInfo}</p>
                <div className="sdg-list">
                  <ul className="flex flex-wrap">
                    {project.sdg.map((goal, index) => (
                      <li
                        key={index}
                        className="text-black-600 bg-red-500 rounded-lg px-2 py-1 mb-1 border border-black-300 text-xs"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
