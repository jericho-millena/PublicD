"use client";

import React from "react";
import { ChevronDown, MapPin } from "lucide-react";

const AuthorsData = ({ authors }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4"> 
      {authors.map((author, index) => (
        <a
          key={index}
          href="/pages/profile/ProfileMain" 
          className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center w-full max-w-full hover:bg-gray-200 transition-colors" // Add hover effect
        >
          <img
            src={author.image}
            alt="profile"
            width={90} 
            height={60} 
            className="rounded-full" 
          />
          <div className="ml-4 flex flex-col w-full"> 
            <h3 className="text-sm font-semibold text-gray-900">{author.name}</h3>
            <p className="text-gray-600 text-xs">{author.degree}</p>
            <div className="flex items-center text-gray-600 text-xs mt-1"> 
              <MapPin className="w-4 h-4 mr-1" /> 
              {author.university}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AuthorsData;
