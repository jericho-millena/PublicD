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
      <a
        href="https://plu.mx/plum/a/?doi=10.1016%2Fj.cell.2016.06.054"
        data-popup="right"
        data-size="large"
        class="plumx-plum-print-popup"
        data-site="plum"
        data-hide-when-empty="true"
      >
        The Troubled Touch of Autism
      </a>
    </div>
  );
};

export default PlumXMetrics;
