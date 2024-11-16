"use client"

import React, { useEffect } from "react";

const AltmetricBadges = ({ doi }) => {
  useEffect(() => {
    // Load the Altmetric script dynamically
    const script = document.createElement("script");
    script.src = "https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="altmetric-embed"
        data-badge-type="donut" // Use donut type for small badge
        data-doi={doi} // Dynamic DOI
        data-condensed="true" // Condensed badge style
        data-hide-no-mentions="true" // Hide if no mentions
      ></div>
    </div>
  );
};

export default AltmetricBadges;