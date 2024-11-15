// components/ResearchStatistics.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ResearchStatistics = ({ percentage, width = 100, height = 100 }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {/* Progress Bar */}
    <div style={{ width: `${width}px`, height: `${height}px`, marginRight: "16px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: "butt", // Apply square line caps
          pathColor: "red",
          textColor: "black",
        })}
      />
    </div>

    {/* Color Legends */}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <div style={{ width: "15px", height: "15px", backgroundColor: "red", marginRight: "8px" }}></div>
        <span>Downloads</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "15px", height: "15px", backgroundColor: "gray", marginRight: "8px" }}></div>
        <span>Views</span>
      </div>
    </div>
  </div>
);

export default ResearchStatistics;
