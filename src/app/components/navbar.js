"use client";

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { navbarItems } from "../Data/data";

export default function Navbar() {
  const basePath = "/PublicD";
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Disclosure as="nav" className="bg-red-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center p-2">
            <span className="mr-4">
              <img
                src={`${basePath}/logon1.png`}
                alt="University Logo"
                width={55}
                height={47}
              />
            </span>
            <div>
              <h1 className="text-white text-xs md:text-l font-semibold">
                Research Management
              </h1>
              <p className="text-white text-xs md:text-l font-semibold">
                Information System
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex h-full">
              {navbarItems.map(({ id, label, link }) => (
                <a
                  href={link}
                  key={id}
                  className="inline-flex items-center px-4 py-2 font-medium text-white hover:text-gray-200 hover:bg-red-800 transition-colors duration-500 rounded-md"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md text-white hover:text-gray-200 focus:outline-none focus:text-white"
                onClick={toggleDisclosure}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden border-t-2 border-white fixed inset-y-0 right-0 z-50 bg-red-600 w-1/2 transition-opacity transition-transform duration-00 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="px-4 py-8 space-y-4 text-white">
          <button
            onClick={toggleDisclosure}
            className="px-4 py-2 font-medium hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navbarItems.map(({ id, label, link }) => (
            <a
              href={link}
              key={id}
              className="block px-4 py-2 font-medium hover:text-gray-200 hover:bg-red-800 transition-colors duration-300 rounded-md"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </Disclosure>
  );
}
