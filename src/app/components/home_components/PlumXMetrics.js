// components/PlumXBigBen.js
import React, { useEffect } from "react";

const PlumXMetrics = ({ doi }) => {
  useEffect(() => {
    // Dynamically load the PlumX widget script
    const script = document.createElement("script");
    script.src = "https://d39af2mgp1pqhg.cloudfront.net/widget-popup.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the PlumX Print Widget */}
      <a
        href={`https://plu.mx/plum/a/?doi=${doi}`}
        className="plumx-bigben"
        data-hide-when-empty="true"
      >
        PlumX Metrics
      </a>
    </div>
  );
};

export default PlumXMetrics;
