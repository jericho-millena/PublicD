import React, { useEffect } from 'react';

const Plumx = () => {
  useEffect(() => {
    // Dynamically load the PlumX widget script
    const script = document.createElement('script');
    script.src = "//cdn.plu.mx/widget-popup.js";
    script.async = true;
    script.onload = () => {
      console.log('PlumX script loaded');
    };
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://plu.mx/plum/a/?doi=10.1371%2Fjournal.pone.0197326.t004"
      data-popup="right"
      data-size="medium"
      className="plumx-plum-print-popup plum-bigben-theme"
      data-site="plum"
      data-pass-hidden-categories="true"
    >
      PlumX Widget
    </a>
  );
};

export default Plumx;
