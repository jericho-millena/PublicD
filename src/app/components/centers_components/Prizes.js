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
