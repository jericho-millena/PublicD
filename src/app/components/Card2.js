import React from 'react';

const Card2 = ({ user }) => {
  // Determine the color based on progress
  const progressBarColor = user.progress >= 50 ? "bg-red-500" : "bg-gray-200";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 flex flex-col sm:flex-row items-center">
      {/* Progress Circle Bar on Left */}
      <div className="flex-none mr-4">
        <div className="w-20 h-20 relative">
          {/* Gray circle */}
          <svg className="absolute" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="40%" fill="none" stroke="gray" strokeWidth="4" />
          </svg>
          {/* Red progress arc */}
          <svg className="absolute" width="100%" height="100%" transform="rotate(-90)">
            <circle cx="50%" cy="50%" r="40%" fill="none" stroke="red" strokeWidth="4" 
                    strokeDasharray={`${user.progress * 2.513}, 251.3`} />
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
          <h2 className="text-lg font-semibold">{user.title}</h2>
          {/* Author */}
          <p className="text-gray-600 mb-2">{user.author}</p>
          {/* Research Info */}
          <p className="text-gray-600 mb-2 text-sm">{user.researchInfo}</p>
          {/* SDG Data */}
          <div className="sdg-list">
            <ul className="flex flex-wrap">
              {user.sdg.map((goal, index) => (
                <li key={index} className="text-black-600 bg-red-500 rounded-lg px-2 py-1 mb-1 border border-black-300 text-sm" style={{ whiteSpace: 'nowrap' }}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
