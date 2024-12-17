import React from "react";

const Card2 = ({
  title,
  progress,
  typeOfPaper,
  publicationYear,
  researchInfo,
  sdg,
}) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const progressLength = (progress / 100) * circumference;
  const remainingLength = circumference - progressLength;

  return (
    <a
      href="/pages/projects/ProjectMain"
      className="flex flex-row items-center bg-white border border-gray-200 rounded-lg h-40 shadow hover:bg-gray-100 p-4 w-full"
    >
      {/* Progress Circle */}
      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center mr-4">
        <div className="relative w-full h-full">
          {/* Background Circle */}
          <svg className="absolute" width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="gray"
              strokeWidth="4"
            />
          </svg>
          {/* Progress Arc */}
          <svg
            className="absolute"
            width="100%"
            height="100%"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="red"
              strokeWidth="4"
              strokeDasharray={`${progressLength} ${remainingLength}`}
            />
          </svg>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500 font-semibold text-sm">
            {progress}%
          </span>
        </div>
      </div>

      {/* Content: Title and ResearchInfo */}
      <div className="flex flex-col justify-center flex-grow">
        <div className="mb-1 text-md md:text-md lg:text-xl font-bold tracking-tight text-gray-900 text-left">
          {title}
        </div>

        {/* Research Info */}
        <p
          className="text-gray-600 text-xs sm:text-sm md:text-md lg:text-base text-left line-clamp-2 md:line-clamp-2 lg:line-clamp-4"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {researchInfo}
        </p>

        {/* Research Unit and Languages */}
        <div className="text-xs text-gray-600 mt-1">
          <p>{typeOfPaper}</p>
          <p>Publication Year: {publicationYear}</p>
        </div>

        {/* SDG List: Hidden on Mobile */}
        {sdg && sdg.length > 0 && (
          <div className="hidden sm:block mt-2">
            <ul className="flex flex-wrap">
              {sdg.map((goal, index) => (
                <li
                  key={index}
                  className="text-white bg-red-700 rounded-lg md:px-1 lg:px-2 py-1 mb-1 mr-1 border border-gray-300 text-xs lg:text-base"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </a>
  );
};

export default Card2;
