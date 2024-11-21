import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance"; // Adjust the path to your Axios instance

const InfoList = () => {
  const [dynamicNumbers, setDynamicNumbers] = useState({});
  const infoList = [
    {
      id: 1,
      label: "Researchers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Paper Published",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "IP Assets",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      label: "Research Centers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get("/info-numbers"); // Adjust endpoint to your API
        console.log("API Response:", response.data); // Debugging: Log the response
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
                {dynamicNumbers[item.id] ?? 0} {/* Default value is 0 */}
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
