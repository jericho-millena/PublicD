import React from "react";

const ProfileList = ({ user }) => {
  const { name, researchUnit, image, topics } = user; // Destructure the topics array

  return (
    <a
      href="/pages/profile/ProfileMain"
      className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-32 lg:h-40 hover:bg-gray-100 relative"
    >
      <div className="group flex items-center ml-5">
        <img
          className="mr-2 mt-5 h-8 w-13 md:h-12 md:w-16 lg:h-16 lg:w-20 rounded-full"
          src={image}
          alt={name}
        />
        <div className="ltr:ml-3">
          <h2 className="text-sm md:text-md lg:text-xl font-semibold mb-0 mt-6">
            {name}
          </h2>
          <p className="text-xs text-gray-600">{researchUnit}</p>
        </div>
      </div>

      {/* Display the topics in a row */}
      <div className="flex flex-row space-x-2 ml-5 mt-2">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="w-20 bg-red-700 rounded-lg overflow-hidden shadow-sm p-1 flex items-center justify-center"
          >
            <p className="text-xs text-white text-center">{topic}</p>
          </div>
        ))}
      </div>
    </a>
  );
};

export default ProfileList;
