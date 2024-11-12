// components/ShowMoreButton.js
import React from "react";

const ShowMoreButton = ({ showMore, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg mt-4 focus:outline-none hover:bg-red-700 transition duration-300"
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
