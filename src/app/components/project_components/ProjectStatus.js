import React from "react";

const ProjectStatus = ({ status, started, expectedCompletion }) => {
  return (
    <div className="text-gray-700 text-left lg:text-right text-sm">
      {/* Status */}
      <div className="mb-3">
        <span className="font-semibold text-xs lg:text-sm">Status: </span>
        <span
          className={`font-semibold text-xs lg:text-sm ${
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
        <span className="font-semibold text-xs lg:text-sm">Started: </span>
        <span className="text-xs lg:text-sm">{started}</span>
      </div>

      {/* Expected Completion Date */}
      <div>
        <span className="font-semibold text-xs lg:text-sm">
          Expected Completion:{" "}
        </span>
        <span className="text-xs lg:text-sm">{expectedCompletion}</span>
      </div>
    </div>
  );
};

export default ProjectStatus;
