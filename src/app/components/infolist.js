import React from "react";

const InfoList = ({ data }) => {
  return (
    <div className="flex justify-center py-5">
      <dl
        className={`info-list grid grid-rows-2 grid-flow-col gap-4 sm:grid-rows-2 grid-flow-col gap-4 lg:grid-rows-1 grid-flow-col item-center text-left`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="info-item flex flex-col items-start p-4 relative"
          >
            <div className="relative flex flex-col items-center">
              <div className="absolute left-0 top-0 bottom-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
              <dt className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 text-red-600 mb-4 ml-4">
                {item.number}
              </dt>
            </div>
            <dd className="flex items-center ml-4">
              <span className="mr-1">{item.icon}</span>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-400">
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
