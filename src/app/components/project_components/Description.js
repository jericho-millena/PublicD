import React from "react";

const DynamicTextComponent = ({ content }) => {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default DynamicTextComponent;
