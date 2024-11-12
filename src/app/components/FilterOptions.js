import React, { useState } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Publication Year</h3>
        <div className="space-y-2">
          <input type="checkbox" id="year2024" />
          <label htmlFor="year2024" className="ml-2 text-sm">
            2024
          </label>
          <br />
          <input type="checkbox" id="year2023" />
          <label htmlFor="year2023" className="ml-2 text-sm">
            2023
          </label>
          <br />
          <input type="checkbox" id="year2022" />
          <label htmlFor="year2022" className="ml-2 text-sm">
            2022
          </label>
          <br />
          {/* More years can be added here */}
          {showMore && (
            <>
              <input type="checkbox" id="year2021" />
              <label htmlFor="year2021" className="ml-2 text-sm">
                2021
              </label>
              <br />
              <input type="checkbox" id="year2020" />
              <label htmlFor="year2020" className="ml-2 text-sm">
                2020
              </label>
              <br />
              <input type="checkbox" id="year2019" />
              <label htmlFor="year2019" className="ml-2 text-sm">
                2019
              </label>
            </>
          )}
        </div>
        <button
          className="text-sm text-red-600 mt-2"
          onClick={handleShowMoreClick}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg">Language / Dialect</h3>
        <div className="space-y-2">
          <input type="checkbox" id="english" />
          <label htmlFor="english" className="ml-2 text-sm">
            English
          </label>
          <br />
          <input type="checkbox" id="tagalog" />
          <label htmlFor="tagalog" className="ml-2 text-sm">
            Tagalog
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg">Sustainable Development Goals</h3>
        <div className="space-y-2">
          <input type="checkbox" id="noPoverty" />
          <label htmlFor="noPoverty" className="ml-2 text-sm">
            No Poverty
          </label>
          <br />
          <input type="checkbox" id="zeroHunger" />
          <label htmlFor="zeroHunger" className="ml-2 text-sm">
            Zero Hunger
          </label>
          <br />
          <input type="checkbox" id="goodHealthWellbeing" />
          <label htmlFor="goodHealthWellbeing" className="ml-2 text-sm">
            Good Health & Well-being
          </label>
          <br />
          <input type="checkbox" id="qualityEducation" />
          <label htmlFor="qualityEducation" className="ml-2 text-sm">
            Quality Education
          </label>
          <br />
          <input type="checkbox" id="genderEquality" />
          <label htmlFor="genderEquality" className="ml-2 text-sm">
            Gender Equality
          </label>
          <br />
          {showMore && (
            <>
              <input type="checkbox" id="cleanWaterSanitation" />
              <label htmlFor="cleanWaterSanitation" className="ml-2 text-sm">
                Clean Water & Sanitation
              </label>
              <br />
              <input type="checkbox" id="affordableCleanWater" />
              <label htmlFor="affordableCleanWater" className="ml-2 text-sm">
                Affordable and Clean Water
              </label>
              <br />
              <input type="checkbox" id="decentWorkEconomicGrowth" />
              <label
                htmlFor="decentWorkEconomicGrowth"
                className="ml-2 text-sm"
              >
                Decent Work & Economic Growth
              </label>
              <br />
              <input type="checkbox" id="industryInnovationInfrastructure" />
              <label
                htmlFor="industryInnovationInfrastructure"
                className="ml-2 text-sm"
              >
                Industry, Innovation & Infrastructure
              </label>
              <br />
              <input type="checkbox" id="reducedInequalities" />
              <label htmlFor="reducedInequalities" className="ml-2 text-sm">
                Reduced Inequalities
              </label>
              <br />
              <input type="checkbox" id="sustainableCitiesCommunities" />
              <label
                htmlFor="sustainableCitiesCommunities"
                className="ml-2 text-sm"
              >
                Sustainable Cities & Communities
              </label>
              <br />
              <input type="checkbox" id="responsibleConsumptionProduction" />
              <label
                htmlFor="responsibleConsumptionProduction"
                className="ml-2 text-sm"
              >
                Responsible Consumption & Production
              </label>
              <br />
              <input type="checkbox" id="climateAction" />
              <label htmlFor="climateAction" className="ml-2 text-sm">
                Climate Action
              </label>
              <br />
              <input type="checkbox" id="lifeBelowWater" />
              <label htmlFor="lifeBelowWater" className="ml-2 text-sm">
                Life Below Water
              </label>
              <br />
              <input type="checkbox" id="lifeOnLand" />
              <label htmlFor="lifeOnLand" className="ml-2 text-sm">
                Life on Land
              </label>
              <br />
              <input type="checkbox" id="peaceJusticeStrongInstitutions" />
              <label
                htmlFor="peaceJusticeStrongInstitutions"
                className="ml-2 text-sm"
              >
                Peace, Justice & Strong Institutions
              </label>
              <br />
              <input type="checkbox" id="partnershipsForGoals" />
              <label htmlFor="partnershipsForGoals" className="ml-2 text-sm">
                Partnerships for the Goals
              </label>
            </>
          )}
          <button
            className="text-sm text-red-600 mt-2"
            onClick={handleShowMoreClick}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg">Type</h3>
        <div className="space-y-2">
          <input type="checkbox" id="article" />
          <label htmlFor="article" className="ml-2 text-sm">
            Article
          </label>
          <br />
          <input type="checkbox" id="conferenceContribution" />
          <label htmlFor="conferenceContribution" className="ml-2 text-sm">
            Conference Contribution
          </label>
          <br />
          <input type="checkbox" id="reviewArticle" />
          <label htmlFor="reviewArticle" className="ml-2 text-sm">
            Review Article
          </label>
          <br />
          <input type="checkbox" id="paper" />
          <label htmlFor="paper" className="ml-2 text-sm">
            Paper
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg">Research Unit / Center</h3>
        <div className="space-y-2">
          <input type="checkbox" id="pabloBorbon" />
          <label htmlFor="pabloBorbon" className="ml-2 text-sm">
            Pablo Borbon
          </label>
          <br />
          <input type="checkbox" id="steerHub" />
          <label htmlFor="steerHub" className="ml-2 text-sm">
            STEER Hub
          </label>
          <br />
          <input type="checkbox" id="kistPark" />
          <label htmlFor="kistPark" className="ml-2 text-sm">
            KIST Park
          </label>
          <br />
          <input type="checkbox" id="vipCorals" />
          <label htmlFor="vipCorals" className="ml-2 text-sm">
            VIP Corals
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
