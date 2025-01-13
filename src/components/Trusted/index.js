import { IoShieldCheckmark } from "react-icons/io5";

import "./index.css";

const Trusted = (property) => {
  const { details } = property;

  const listItem = (val) => {
    return (
      <li className="trusted-list-item d-flex flex-row align-items-center col-6">
        <img src={val.img} alt={val.title} className="image arr" />
        <p className="text spacing1">{val.title}</p>
      </li>
    );
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="trusted-heading">
          <span className="bold1">Trusted by</span>
          <span className="text-primary bold2"> 20,00,000+</span> <br />
          <span className="text blue">Users Every month</span>{" "}
        </h3>
        <IoShieldCheckmark color="#53cf1b" size={40} className="mb-3" />
      </div>
      <ul className="items-list d-flex flex-row justify-content-between p-0 m-0 col-12">
        {details.map((eachItem) => listItem(eachItem))}
      </ul>
    </div>
  );
};

export default Trusted;
