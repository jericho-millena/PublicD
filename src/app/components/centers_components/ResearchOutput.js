import React from "react";



const ResearchOutput = ({ user }) => {
  return (
    <a
      className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl"
    >
      {/* Content Section */}
      <div className="flex-grow flex flex-col space-y-2">
        {/* Research Title */}
        <div className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
          {user.title}
        </div>

        {/* Research Info */}
        <p className="text-gray-600 text-sm">{user.researchInfo}</p>

        {/* SDG Goals, Download Icon, and Views Icon */}
        <div className="sdg-list mt-2 flex flex-wrap items-center space-y-2 sm:space-y-0">
          <ul className="flex flex-wrap mb-2">
            {user.sdg.map((goal, index) => (
              <li
                key={index}
                className="text-white bg-red-500 rounded-lg px-2 py-1 border border-gray-300 text-xs mr-2 mb-2"
              >
                {goal}
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Image and PlumX Metrics (only for research 1, 4, 6) */}
      {(user.id === 1 || user.id === 4 || user.id === 6) && (
        <div className="flex-none flex flex-col items-center mt-4 md:mt-0">
          <img
            src={user.image}
            alt={user.title}
            className="w-11 h-14 object-contain"
          />
          <p className="text-sm text-gray-500 mt-2">PlumX Metrics</p>
        </div>
      )}

    
    </a>
  );
};

export default ResearchOutput;
