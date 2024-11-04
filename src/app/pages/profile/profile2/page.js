import React from "react";

export default function Profile2() {
  return (
    <main>
      <div
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </div>

      <aside
        id="logo-sidebar"
        className="fixed top-30 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" // Changed width from w-64 to w-80
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s"
            className="h-20 me-10 sm:h-100"
            alt="Flowbite Logo"
          />
          <span className="flex items-center p-2 text-xl text-gray-900 rounded-lg dark:text-black">
            Firstname Middlename Lastname
          </span>
          <ul className="font-medium">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black">
                <svg
                  className="w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 50"
                ></svg>
                <span>Knowledge, Innovation, and Science Technology(KIST) Park</span>
              </div>
            </li>
            <li>
              <div className="flex items-center text-gray-900 rounded-lg dark:text-black">
                <svg
                  className="w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                ></svg>
                <span>www.website.com</span>
              </div>
            </li>
            <li>
              <div className="flex items-center text-gray-900 rounded-lg dark:text-black">
                <svg
                  className="w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                ></svg>
                <span>www.linkedin.com/john-doe</span>
              </div>
            </li>
            <li>
              <div className="flex items-center text-gray-900 rounded-lg dark:text-black">
                <svg
                  className="w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                ></svg>
                <span>www.facebook.com/john-doe</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
