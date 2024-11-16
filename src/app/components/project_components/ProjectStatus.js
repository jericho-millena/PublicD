import React from "react";

const ProjectStatus = ({ status, started, expectedCompletion }) => {
  return (
    <div className="text-gray-700 text-right text-lg">
      {/* Status */}
      <div className="mb-3">
        <span className="font-semibold text-xl">Status: </span>
        <span
          className={`font-semibold text-xl ${
            status.toLowerCase() === "ongoing"
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Started Date */}
      <div className="mb-3">
        <span className="font-semibold text-xl">Started: </span>
        <span className="text-lg">{started}</span>
      </div>

      {/* Expected Completion Date */}
      <div>
        <span className="font-semibold text-xl">Expected Completion: </span>
        <span className="text-lg">{expectedCompletion}</span>
      </div>
    </div>
  );
};

export default ProjectStatus;
