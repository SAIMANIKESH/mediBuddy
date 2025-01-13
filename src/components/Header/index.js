import { BsArrowLeft, BsCart2 } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { IoWalletOutline } from "react-icons/io5";

import "./index.css";

const Headers = () => {
  return (
    <div className="bg-white navbar">
      <BsArrowLeft size="24px" className="mt-0 mb-2" />
      <div className="d-flex flex-column">
        <h1 className="nav-head d-flex flex-row mb-0">
          Billekahalli <ImLocation2 size="16px" className="ml-1" />
        </h1>
        <p className="text text-size mb-1">Sarvabhoumanagar, Billekahall...</p>
      </div>
      <IoWalletOutline size="26px" className="arr mt-2" />
      <BsCart2 size="26px" className="arr mt-2" />
    </div>
  );
};

export default Headers;
