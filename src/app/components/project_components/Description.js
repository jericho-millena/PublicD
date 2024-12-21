import React from "react";

const DynamicTextComponent = ({ content }) => {
  return (
    <div>
      <p className="text-gray-600 text-sm md:text-lg lg:text-xl">{content}</p>
    </div>
  );
};

export default DynamicTextComponent;
