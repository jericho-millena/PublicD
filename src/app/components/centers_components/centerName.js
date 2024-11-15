import React from 'react';

const Card = ({ user }) => {
  const { name, campus, image } = user;

  return (
    <a href="#">  {/* Replace '#' with your desired link */}
      <div className="border bg-white overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 3xl:max-w-2xl cursor-pointer">
        <div className="group flex items-start ml-5">
          <div className="ltr:ml-3 flex-1">
            <br />
            <h2 className="text-xl font-semibold mb-1 ml-5 mt-4 color-red">{name}</h2>
          </div>
        </div>
        <div className="flex justify-end items-center mt-4 pr-5 pb-3">
            <br/>   <br/>   <br/>
          <p className="text-xs text-gray-600 flex items-center mt-1px ml-10]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.686 2 6 4.686 6 8c0 4.075 6 13 6 13s6-8.925 6-13c0-3.314-2.686-6-6-6zM12 10a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            {campus}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;