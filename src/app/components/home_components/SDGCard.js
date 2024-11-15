import React from "react";

const SDGCard = ({ sdgData }) => {
  if (!sdgData || sdgData.length === 0) {
    return <div>No SDG data available.</div>;
  }

  return (
    <div className="container mx-auto px-2 flex justify-center">
      <div className="w-full max-w-6xl max-w-screen-lg">
        <h1 className="text-lg lg:text-2xl xl:text-2xl text-red-800 font-bold mb-5 lg:mb-7 xl:mb-7 pt-5 lg:pt-7 xl:pt-7">
          Sustainable Development Goals
        </h1>
        <div className="grid grid-rows-9 grid-flow-rows gap-4 md:grid-rows-6 grid-flow-col gap-4 lg:grid-rows-5 grid-flow-col gap-4">
          {sdgData.map((sdg) => (
            <div key={sdg.id} className="mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                <div className="flex items-center">
                  <img
                    src={sdg.image}
                    alt={`SDG ${sdg.id}`}
                    className="w-16 lg:w-24 md:w-20 mr-4"
                  />
                  <div>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Papers: ${sdg.papers}`}</p>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Projects: ${sdg.projects}`}</p>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Activities: ${sdg.activities}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SDGCard;
