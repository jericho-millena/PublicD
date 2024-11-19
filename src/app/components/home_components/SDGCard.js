import React, { useEffect, useState } from "react";
import { sdgData as staticSDGData } from "@/app/Data/data"; // Replace with your static placeholder data if used
import axios from "@/lib/axiosInstance";

const SDGCard = () => {
  const [sdgData, setSdgData] = useState(staticSDGData); // Start with static data or an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSDGData = async () => {
      try {
        const response = await axios.get("/sdg-data");
        console.log("API Response:", response.data); // Debugging: Log the API response

        // Validate response is an array
        const dynamicData = Array.isArray(response.data) ? response.data : [];

        // Merge dynamic data with static placeholders
        const mergedData = staticSDGData.map((sdg) => {
          const dynamicSDG =
            dynamicData.find((item) => item.id === sdg.id) || {};
          return {
            ...sdg,
            papers: dynamicSDG.papers ?? 0, // Default to 0 if missing
            projects: dynamicSDG.projects ?? 0,
            activities: dynamicSDG.activities ?? 0,
          };
        });

        setSdgData(mergedData);
      } catch (error) {
        console.error("Error fetching SDG data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSDGData();
  }, []);

  if (loading) {
    return <div>Loading SDG data...</div>;
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
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Papers: ${
                      sdg.papers || 0
                    }`}</p>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Projects: ${
                      sdg.projects || 0
                    }`}</p>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">{`Activities: ${
                      sdg.activities || 0
                    }`}</p>
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
