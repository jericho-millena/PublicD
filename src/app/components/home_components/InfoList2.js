import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance"; // Adjust the path to your Axios instance

const InfoList = () => {
  const [dynamicNumbers, setDynamicNumbers] = useState({}); // Store API data
  const infoList = [
    {
      id: 1,
      label: "Research Views",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Research Downloads",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Research Cited",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Awarded Research",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get("/info-numbers2");
        setDynamicNumbers(response.data);
      } catch (error) {
        console.error("Error fetching numbers:", error);
      }
    };

    fetchNumbers();
  }, []);

  return (
    <div className="flex justify-center py-5">
      <dl className="info-list grid grid-rows-2 grid-flow-col gap-4 sm:grid-rows-2 grid-flow-col gap-4 lg:grid-rows-1 grid-flow-col item-center text-left">
        {infoList.map((item) => (
          <div
            key={item.id}
            className="info-item flex flex-col items-start p-4 relative"
          >
            <div className="relative flex flex-col items-center">
              <div className="absolute left-0 top-0 bottom-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
              <dt className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 text-red-600 mb-4 ml-4">
                {dynamicNumbers[item.id] || 0}
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
