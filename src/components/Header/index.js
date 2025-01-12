import { BsArrowLeft, BsCart2 } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { IoWalletOutline } from "react-icons/io5";

import "./index.css";

const Headers = () => {
  return (
    <div className="bg-white navbar">
      <BsArrowLeft size="25px" className="mt-0" />
      <div className="d-flex flex-column">
        <h5 className="nav-head d-flex flex-row mb-0">
          Billekahalli <ImLocation2 size="16px" className="ml-1" />
        </h5>
        <p className="text">Sarvabhoumanagar, Billekahall...</p>
      </div>
      <IoWalletOutline size="25px" />
      <BsCart2 size="25px" />
    </div>
  );
};

export default Headers;
