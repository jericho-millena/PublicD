import React, { useEffect, useState } from "react"; // Replace with your static placeholder data if used

const SDGCard = () => {
  const [sdgData, setSdgData] = useState([]); // Start with static data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Static data
    const fetchedData = [
      {
        id: 1,
        name: "No Poverty",
        papers: 1,
        projects: 0,
        activities: 0,
        image: "/rms/sdg1.png",
      },
      {
        id: 2,
        name: "Zero Hunger",
        papers: 0,
        projects: 1,
        activities: 0,
        image: "/rms/sdg2.png",
      },
      {
        id: 3,
        name: "Good Health and Well-being",
        papers: 0,
        projects: 0,
        activities: 1,
        image: "/rms/sdg3.png",
      },
      {
        id: 4,
        name: "Quality Education",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg4.png",
      },
      {
        id: 5,
        name: "Gender Equality",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg5.png",
      },
      {
        id: 6,
        name: "Clean Water and Sanitation",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg6.png",
      },
      {
        id: 7,
        name: "Affordable and Clean Energy",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg7.png",
      },
      {
        id: 8,
        name: "Decent Work and Economic Growth",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg8.png",
      },
      {
        id: 9,
        name: "Industry, Innovation, and Infrastructure",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg9.png",
      },
      {
        id: 10,
        name: "Reduced Inequality",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg10.png",
      },
      {
        id: 11,
        name: "Sustainable Cities and Communities",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg11.png",
      },
      {
        id: 12,
        name: "Responsible Consumption and Production",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg12.png",
      },
      {
        id: 13,
        name: "Climate Action",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg13.png",
      },
      {
        id: 14,
        name: "Life Below Water",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg14.png",
      },
      {
        id: 15,
        name: "Life on Land",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg15.png",
      },
      {
        id: 16,
        name: "Peace, Justice, and Strong Institutions",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg16.png",
      },
      {
        id: 17,
        name: "Partnerships for the Goals",
        papers: 0,
        projects: 0,
        activities: 0,
        image: "/rms/sdg17.png",
      },
    ];

    setSdgData(fetchedData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
                    src={sdg.image || "/default-image.png"} // Fallback image if missing
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
