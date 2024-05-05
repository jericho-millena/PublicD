import React from "react";

const InfoList = ({ data }) => {
  return (
    <div className="flex justify-center pt-6 pb-6">
      <dl className="info-list flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center text-left">
        {data.map((item) => (
          <div
            key={item.id}
            className="info-item flex flex-col items-start p-4 relative w-64"
          >
            <div className="relative flex flex-col items-center sm:items-start">
              <div className="absolute left-0 top-0 bottom-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
              <dt className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-red-600 ml-4">
                {item.number}
              </dt>
            </div>
            <dd className="flex items-center ml-4">
              <span>{item.icon}</span>
              <p className="ml-4 text-base text-gray-700 dark:text-gray-400">
                {item.label}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default InfoList;
