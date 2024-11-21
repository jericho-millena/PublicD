// components/AltmetricBadge.js
import React, { useEffect } from "react";

const AltmetricBadge = ({ doi }) => {
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
        data-badge-type="medium-donut" // Position of detailed information
        data-doi={doi}
      ></div>
    </div>
  );
};

export default AltmetricBadge;
