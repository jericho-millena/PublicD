// components/ResearchSummary.js
import React from "react";

const data = [
  { label: "Article", value: 51 },
  { label: "Conference Contribution", value: 5 },
  { label: "Article Review", value: 7 },
  { label: "Paper", value: 21 },
  { label: "Conference Article", value: 4 },
];

const ResearchSummary = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {data.map((item, index) => (
        <div key={index}>
          <p className="text-sm font-medium">{item.label}</p>
          <p className="text-3xl font-bold text-red-700">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ResearchSummary;
