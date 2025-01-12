import { TiTick } from "react-icons/ti";
import { BiSolidTimer } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { RiFlaskFill } from "react-icons/ri";

import "./index.css";

const LabTests = (property) => {
  const { details } = property;
  const { categories } = details;

  const listItem = (val) => {
    return (
      <li className="blood-count-list-item shadow mt-3 mb-1">
        <div className="d-flex justify-content-end mb-0">
          <span className="bg-green text-white design mb-0">
            <TiTick color="white" size="18px" className="" />
            Cashless
          </span>
        </div>
        <div className="p-3 pt-0 pb-0">
          <h6 className="blood-count-heading text mt-0">
            Complete Blood Count (CBC) -{" "}
          </h6>
          <div className="blood-count-container d-flex justify-content-between">
            <h6 className="blood-count-heading text mt-0 mb-0">
              EDTA Whole Blood
            </h6>
            <div className="d-flex flex-column">
              <div className="d-flex mb-0">
                <p className="blood-count-text mb-0">₹ 800/- </p>
                <p className="text-success green text mb-0">55% OFF</p>
              </div>
              <p className="text mt-0 mb-0">
                ₹500/- <span className="blood-count-text true"> Onwards</span>
              </p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mb-0">
            <BiSolidTimer color="blue" size="24px" className="arr mb-1" />
            <p className="text mb-1">Reports in 10-12 hrs</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="mt-0 arrange">
                <IoMdHome color="orange" size="20px" className="arr" />
                <p className="text-success text">Home</p>
              </div>
              <div className={`mt-0 arrange ${val} bc-spacing`}>
                <RiFlaskFill color="blue" size="20px" className="arr" />
                <p className="text-success text">Lab</p>
              </div>
            </div>
            <button className="btn btn-outline-primary text-primary bc-button">
              Add
            </button>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="features-container pt-4 pb-4 p-3">
      <div className="headline mb-1">
        <h1 className="heading">Book Popular Lab Tests</h1>
        <button className="button">View More</button>
      </div>
      <ul className="category-container d-flex flex-row m-0 mt-3 p-0">
        {categories["10386"].map((eachItem) => (
          <li
            className={`list-items ${
              eachItem === "Popular" ? "hybrid" : ""
            } shadow-sm`}
            key={eachItem}
          >
            {eachItem !== "Popular" ? eachItem : "For Amazon Employees"}
          </li>
        ))}
      </ul>

      <ul className="blood-count-list d-flex flex-column m-0 mt-3 p-0">
        {listItem()} {listItem()} {listItem("d-none")} {listItem("d-none")}
      </ul>
    </div>
  );
};

export default LabTests;
