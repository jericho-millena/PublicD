import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Card2 = ({ user }) => {
  // Determine the color based on progress
  const progressBarColor = user.progress >= 50 ? "bg-red-500" : "bg-gray-200";

  // Adjust the radius to change the size of the progress circle bar
  const radius = 30; // Adjust the radius to change the size of the circle

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDasharray based on progress percentage
  const progressLength = (user.progress / 100) * circumference;
  const remainingLength = circumference - progressLength;

  // Calculate the strokeDashoffset to start filling from the top
  const strokeDashoffset = circumference - progressLength;

  return (
    <a href="/pages/papers/papers2" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-95 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative">
      {/* Progress Circle Bar on Left */}
      <div className="flex-none mr-4">
        <div className="w-20 h-20 relative">
          {/* Gray circle */}
          <svg className="absolute" width="100%" height="100%">
            <circle cx="50%" cy="50%" r={radius} fill="none" stroke="gray" strokeWidth="4" />
          </svg>
          {/* Red progress arc */}
          <svg className="absolute" width="100%" height="100%" transform={`rotate(90) translate(100%, 0%)`}>
            <circle cx="50%" cy="50%" r={radius} fill="none" stroke="red" strokeWidth="4" 
                    strokeDasharray={`${progressLength} ${remainingLength}`} 
                 />
          </svg>
          {/* Progress text */}
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500">
            {user.progress}%
          </span>
        </div>
      </div>
      
      {/* Research Title, Author, Research Info, and SDG Data */}
      <div className="flex-grow">
        <div className="text-left mb-2">
          {/* Title */}
          <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{user.title}</div> 
          {/* Research Info */}
          <p className="text-gray-600 mb-2 text-xs">{user.researchInfo}</p>
          {/* SDG Data */}
          <div className="sdg-list">
            <ul className="flex flex-wrap">
              {user.sdg.map((goal, index) => (
                <li key={index} className="text-black-600 bg-red-500 rounded-lg px-2 py-1 mb-1 border border-black-300 text-xs" style={{ whiteSpace: 'nowrap' }}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Eye Icon (FaEye) */}
      <div className="absolute bottom-0 right-0 m-2">
        <FaEye />
      </div>
    </a>
  );
};

export default Card2;
