import React from "react";

const Card = ({ number, icon, label }) => (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-600">
      {number}
    </h5>
    <div className="flex items-center">
      {icon}
      <p className="text-sm text-gray-700 dark:text-gray-400">{label}</p>
    </div>
  </div>
);

export default Card;
