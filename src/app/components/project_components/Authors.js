import { ChevronDown, MapPin } from "lucide-react";
import React, { useState } from "react";
import ShowMoreButton from "../ShowMoreButton";

const authors = [
  {
    name: "Jane Smith",
    degree: "Doctorate Degree in Artificial Intelligence",
    university: "Batangas State University",
    campus: "Main Campus",
  },
  {
    name: "Michael Johnson",
    degree: "Master's Degree in Data Science",
    university: "University of the Philippines",
    campus: "Diliman Campus",
  },
  {
    name: "Emily Davis",
    degree: "Bachelor's Degree in Information Technology",
    university: "De La Salle University",
    campus: "Manila Campus",
  },
  {
    name: "Robert Brown",
    degree: "PhD in Machine Learning",
    university: "Ateneo de Manila University",
    campus: "Katipunan Campus",
  },
];

export default function AuthorsPage() {
  const [showMore, setShowMore] = useState(false);

  const displayedAuthors = showMore ? authors : authors.slice(0, 3);

  const handleShowMoreToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-md md:text-lg lg:text-2xl font-bold mb-6">
        About the authors ({authors.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {displayedAuthors.map((author, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-sm lg:text-lg leading-none">{author.name}</h3>
            <p className="text-xs lg:text-sm text-gray-600">{author.degree}</p>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-3 lg:w-4 w-3 lg:h-4 mr-1" />
              <span className="text-xs lg:text-sm">
                {author.university} - {author.campus}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ShowMoreButton showMore={showMore} onClick={handleShowMoreToggle} />
    </div>
  );
}
