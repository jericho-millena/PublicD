import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="border-gray-200 bg-red-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logon.png" className="h-8" alt="University Logo" />
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
              Research Management System
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/pages/profile"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/pages/projects"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/pages/papers"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Papers
                </a>
              </li>
              <li>
                <a
                  href="/pages/ip"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  IP-Assets
                </a>
              </li>
              <li>
                <a
                  href="/pages/centers"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Centers
                </a>
              </li>
              <li>
                <a
                  href="/pages/activity"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Activity
                </a>
              </li>
              <li>
                <a
                  href="/pages/news"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  News/Media
                </a>
              </li>
              <li>
                <a
                  href="/pages/prizes"
                  className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:bg-red-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Prizes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
