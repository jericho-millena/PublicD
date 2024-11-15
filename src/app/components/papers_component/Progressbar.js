import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = ({ percentage, width = 100, height = 100, strokeWidth = 16 }) => (
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
    <div className="ml-5">Progress</div>
  </div>
);

export default Progressbar;
