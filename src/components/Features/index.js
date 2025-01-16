import { BiSolidTimer } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";

import "./index.css";

const Features = (property) => {
  const { details } = property;
  const { categories, props } = details;

  return (
    <div className="med-features-container pt-4 pb-4">
      <div className="headline mb-1">
        <h1 className="heading">Featured Health Check-ups</h1>
        <button className="button">View All</button>
      </div>
      <ul className="category-container d-flex flex-row m-0 mt-3 p-0 col-12">
        {categories["10386"].map((eachItem) => (
          <li
            className={`list-items ${eachItem === "Popular" ? "hybrid" : ""}`}
            key={eachItem}
          >
            {eachItem}
          </li>
        ))}
      </ul>

      <ul className="checkup-container d-flex flex-row m-0 mt-3 p-0">
        {props[0].packages.map((eachItem) => (
          <li className="checkup-item bg-white mb-0" key={eachItem.packageId}>
            {eachItem.isSponsored === true ? (
              <div className="d-flex justify-content-end">
                <span className="bg-danger text-white design">Sponsored</span>
              </div>
            ) : (
              ""
            )}
            <div className="p-3">
              <h1 className="checkup-headings mb-3">{eachItem.packageName}</h1>
              <div className="d-flex flex-row align-items-center mb-0">
                <BiSolidTimer color="blue" size="24px" className="arr" />
                <p className="text-primary text">{eachItem.reportsTatText}</p>
              </div>
              <ul className="check-list-container mb-1 p-4 pb-2 pt-0">
                <li className="check-list-item text">
                  {eachItem.testCount} Tests
                </li>
                <li className="check-list-item text">
                  Age: {eachItem.minAge}-{eachItem.maxAge}
                </li>
                <li className="check-list-item text">
                  Gender:{" "}
                  {eachItem.gender === "Both"
                    ? "Male, Female"
                    : eachItem.gender}
                </li>
              </ul>
              <div className="checkup-extra-details-container d-flex flex-row justify-content-between align-items-center p-3">
                <div className="d-flex flex-column">
                  <p className="text mb-0">Fasting</p>
                  <p className="text-success text">
                    {eachItem.fastingHoursText}
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <p className="text mb-0">Available at</p>
                  {eachItem.currentVisitType === "HomeVisit" ? (
                    <div className="mt-0 arrange">
                      <IoMdHome color="orange" size="20px" className="arr" />
                      <p className="text-success text">Home</p>
                    </div>
                  ) : (
                    eachItem.currentVisitType
                  )}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center mt-3">
                <h5 className="font-weight-bold">
                  ₹ {eachItem.price}-{eachItem.priceRange}
                </h5>
                <button className="btn btn-outline-primary text-primary outline">
                  Add
                </button>
              </div>
            </div>
            <p className="bg-primary text-white text-center text borders pb-0 mb-0">
              {eachItem.tags.bottomTag}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
