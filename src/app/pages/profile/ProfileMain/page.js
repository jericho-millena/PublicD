import React from "react";
import PSideBar from "@/app/components/profile_components/PSideBar";

const ProfileMain = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <PSideBar />
      </div>
      <div className="w-3/4 p-4">
        <div class="py-2  ">
          <div className="py-5">
            <h1 class="text-2xl text-black-800">Research activity per year</h1>
          </div>
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800 col-span-2">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800 col-span-2">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800 col-span-3">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 w-full h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
