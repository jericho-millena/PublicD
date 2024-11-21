import React from "react";

// ProfileImage Component
const ProfileImage = ({ image, name }) => (
  <img className="mr-2 mt-5 h-13 w-20 rounded-full" src={image} alt={name} />
);

// ProfileDetails Component
const ProfileDetails = ({ name, campus }) => (
  <div className="ltr:ml-3">
    <h2 className="text-xl font-semibold mb-0 mt-6">{name}</h2>
    <p className="text-xs text-gray-600">{campus}</p>
  </div>
);

// ProfileTopic Component
const ProfileTopic = ({ topic }) => (
  <div className="mb-2 mt-2 ml-5 w-20 bg-red-700 rounded-lg overflow-hidden shadow-sm p-1 flex flex-col items-center">
    <p className="text-xs text-white text-center">{topic}</p>
  </div>
);

// Main ProfileC Component
const ProfileC = ({ user }) => {
  const { name, campus, image, topic } = user;

  return (
    <a
      href="/pages/profile/ProfileMain"
      className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-95 hover:bg-gray-100 relative"
    >
      <div className="group flex items-center ml-5">
        <ProfileImage image={image} name={name} />
        <ProfileDetails name={name} campus={campus} />
      </div>
      <ProfileTopic topic={topic} />
    </a>
  );
};

export default ProfileC;