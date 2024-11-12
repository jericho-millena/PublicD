// components/Progressbar.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = ({ percentage, width = 100, height = 100 }) => (
  <div style={{ width: `${width}px`, height: `${height}px` }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        strokeLinecap: "butt", // Apply square line caps
        pathColor: "red",
        textColor: "black",
      })}
    />
  <div className="ml-5">Progress</div>
    
  </div>
);

export default Progressbar;
