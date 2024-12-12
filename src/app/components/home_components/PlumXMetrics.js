// components/PlumXMetrics.js
import React, { useEffect } from "react";

const PlumXMetrics = ({ doi }) => {
  useEffect(() => {
    // Ensure the PlumX script is loaded dynamically
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
      <a
        href={`https://plu.mx/plum/a/?doi=${doi}`}
        className="plumx-plum-print-popup"
        data-popup="right"
      >
        PlumX Metrics
      </a>
    </div>
  );
};

export default PlumXMetrics;
