import React from "react";

const KistPark = () => {
  return (
    <div className="mr-10 mt-15 ml-10">
      {/* Search Section */}
      <div className="absolute top-4 right-4"></div>

      {/* KIST Park Image and Description */}
      <div className="ml-0 mr-0">
        <img
          src="/PublicD//socials/kist1.png"
          alt="Research Icon"
          className="w-full h-auto object-cover mb-4"
        />
        <p className="text-gray-600 text-justify">
          The Knowledge, Innovation, and Science Technology (KIST) Park is a
          pioneering economic zone established by Batangas State University
          (BatStateU). It aims to foster collaboration between academia and
          industry, promote technological innovation, and drive economic growth
          in the region. The KIST Park provides a conducive environment for
          research, development, and commercialization of innovative products
          and services. It offers facilities for startups, incubators, and
          research centers, as well as opportunities for technology transfer and
          knowledge sharing. By attracting businesses and researchers, the KIST
          Park aims to position Batangas State University as a leading center
          for innovation and technological advancement in the Philippines.
        </p>
        <br />
        <hr className="mt-4 border-t-2 border-gray-300" />
        <br />
      </div>
    </div>
  );
};

export default KistPark;
