import React from 'react';

const Card = ({ user }) => {
  const { name, campus,campus1, image } = user;

  return (
    <div className="bg-white rounded-lg overflow-hidden border-b-4 border-black-100 max-w-2xl cursor-pointer hover:shadow-lg transition-shadow">
      <div className="group flex items-start">
        <img 
          className="mt-5 h-40 w-35 rounded-md object-cover" 
          src={image} 
          alt={name} 
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1 ml-5 mt-4">{name}</h2>
          <h2 className="text-xs text-gray-600 mb-1 ml-5 mt-4">{campus}</h2>
          <h2 className="text-m mb-1 ml-5 mt-4">{campus1}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
