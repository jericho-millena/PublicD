"use client";

import React from "react";

const AuthorsData = ({ authors }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4"> {/* Keep gap for spacing */}
      {authors.map((author, index) => (
        <a
          key={index}
          href="/pages/profile/ProfileMain" // Directly link to ProfileMain
          className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center w-full max-w-full hover:bg-gray-200 transition-colors" // Add hover effect
        >
          <img
            src={author.image}
            alt="profile"
            width={90} // Keep the smaller image size
            height={60} // Keep the smaller image size
            className="rounded-full" // Circular image
          />
          <div className="ml-4 flex flex-col w-full"> {/* Stretch the text content */}
            <h3 className="text-sm font-semibold text-gray-900">{author.name}</h3>
            <p className="text-gray-600 text-xs">{author.degree}</p>
            <p className="text-gray-600 text-xs mt-1">{author.university}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AuthorsData;
