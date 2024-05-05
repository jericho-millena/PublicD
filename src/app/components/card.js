import React from 'react';

const Card = ({ user }) => {
  const { name, campus, image, topic } = user;

  return (
  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 3xl:max-w-2xl">
    <div class="group flex items-center ml-5">
      <img class="mr-2 mt-5 h-13 w-20 rounded-full" src={image} alt={name} />
      <div class="ltr:ml-3">
        <h2 className="text-xl font-semibold mb-0 mt-6">{name}</h2>
        <p className="text-xs text-gray-600">{campus}</p>
      </div>
    </div>
    <div className="mb-2 mt-2 ml-5 w-20 bg-red-500 rounded-lg overflow-hidden shadow-sm p-1 flex flex-col items-center">
        <p className="text-xs text-white text-center">{topic}</p>
      </div>
    </div>
  );
};

export default Card;