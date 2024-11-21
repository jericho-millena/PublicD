import React from "react";

const Prizes = () => {
  const prizesData = [
    {
      title: "Prize Title",
      recipient: "John Doe (Speaker)",
      date: "April 12, 2023",
    },
    {
      title: "Prize Title",
      recipient: "John Doe (Speaker)",
      date: "April 12, 2023",
    },
  ];

  return (
    <div className="prizes">
      {/* Header */}
      <h1 className="font-lato text-2xl flex items-center">
        {/* Newspaper Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.91 2.73 7.28 6.5 8.36V21h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1v-0.64c3.77-1.08 6.5-4.45 6.5-8.36 0-5.52-4.48-10-10-10zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
        Prizes
      </h1>

      {/* Prizes List */}
      {prizesData.map((prize, index) => (
        <div key={index} className="prize-details mt-4">
          <div className="font-lato text-[#333333] text-[25px]">
            {prize.title}
          </div>
          <p className="text-justify text-[15px] text-gray-500">
            {prize.recipient}
          </p>
          <p className="text-justify text-[15px] text-black">{prize.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Prizes;