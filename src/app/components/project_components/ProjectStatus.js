import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectStatus = ({ projectId }) => {
  const [statusData, setStatusData] = useState(null); // State to hold the project data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectStatus = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await axios.get(`/api/projects/${projectId}/status`);
        setStatusData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load project status.");
        setLoading(false);
      }
    };

    fetchProjectStatus();
  }, [projectId]); // Only re-fetch if projectId changes

  // Show loading indicator while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if data fetch fails
  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="text-gray-700 text-right text-sm">
      {/* Status */}
      <div className="mb-3">
        <span className="font-semibold text-sm">Status: </span>
        <span
          className={`font-semibold text-sm ${
            statusData.status.toLowerCase() === "ongoing"
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          {statusData.status}
        </span>
      </div>

      {/* Started Date */}
      <div className="mb-3">
        <span className="font-semibold text-sm">Started: </span>
        <span className="text-sm">{statusData.started}</span>
      </div>

      {/* Expected Completion Date */}
      <div>
        <span className="font-semibold text-sm">Expected Completion: </span>
        <span className="text-sm">{statusData.expectedCompletion}</span>
      </div>
    </div>
  );
};

export default ProjectStatus;
