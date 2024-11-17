import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = ({ percentage, width = 100, height = 100, strokeWidth = 20 }) => (
  <div style={{ width: `${width}px`, height: `${height}px` }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        strokeLinecap: "butt", // Apply square line caps
        pathColor: "red", // Color of the progress path
        textColor: "black", // Color of the percentage text
        strokeWidth: strokeWidth, // Increase this value to make the progress bar thicker
      })}
    />
    
  </div>
);

export default Progress;
