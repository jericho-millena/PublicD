import React from "react";

const SDGCard = ({ sdgData }) => {
  if (!sdgData || sdgData.length === 0) {
    return <div>No SDG data available.</div>;
  }

  // Chunk the sdgData into rows of 5 elements each
  const chunkedData = [];
  for (let i = 0; i < sdgData.length; i += 5) {
    chunkedData.push(sdgData.slice(i, i + 5));
  }

  return (
    <div className="container mx-auto px-2 flex justify-center">
      <div className="w-full max-w-screen-lg">
        {" "}
        {/* Adjusted maximum width */}
        <h1 className="text-2xl text-red-800 font-semibold mb-4 mt-10">
          Sustainable Development Goals
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {chunkedData.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((sdg) => (
                <div key={sdg.id} className="mb-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                    {" "}
                    {/* Increased padding */}
                    <div className="flex items-center">
                      <img
                        src={sdg.image}
                        alt={`SDG ${sdg.id}`}
                        className="w-24 h-auto mr-4" // Increased image size
                      />
                      <div>
                        <p className="text-sm text-gray-700 mb-1">{`Papers: ${sdg.papers}`}</p>
                        <p className="text-sm text-gray-700 mb-1">{`Projects: ${sdg.projects}`}</p>
                        <p className="text-sm text-gray-700">{`Activities: ${sdg.activities}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SDGCard;
