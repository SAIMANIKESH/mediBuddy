import { formatDistance } from "date-fns";
import { IoStar } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { BsFillDiamondFill } from "react-icons/bs";

import "./index.css";

const Feedback = (property) => {
  const { details } = property;
  const { title, props } = details;

  const listItem = (val) => {
    const postTime = formatDistance(new Date(val.days), new Date(), {
      addSuffix: true,
    });

    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < val.rating) {
        stars.push(<IoStar color="gold" size={12} />);
      } else {
        stars.push(<IoStar color="gray" size={12} />);
      }
    }

    return (
      <li className="checkup-item bg-item">
        <div className="d-flex justify-content-between align-items-center mb-0 p-3 pt-2">
          <div className="d-flex align-items-center mb-0">
            <span className="stars arr">{stars}</span>
            <p className="blood-count-text true bold1 mb-0">{postTime}</p>
          </div>
          <div className="d-flex align-items-center mb-0">
            <ImLocation2 color="gray" size={15} className="arr mb-0" />
            <p className="blood-count-text true bold1 mb-0">{val.location}</p>
          </div>
        </div>
        <p className="p-3 pt-0 pb-0 mt-0 mb-0">
          "{val.content.substring(0, 101)}...
        </p>
        <hr className="hr" />
        <div className="d-flex align-items-center feed-space p-1 pt-0 pb-0 ml-3 pl-3">
          <BsFillDiamondFill color="#ced7ed" size={25} className="arr mt-0" />
          <p className="user-name mt-0">{val.name}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="p-3 pt-0 bg">
      <h1 className="heading blue mt-0 mb-3">{title}</h1>
      <ul className="checkup-container d-flex flex-row m-0 p-0 mt-3">
        {props.map((eachItem) => listItem(eachItem))}
      </ul>
    </div>
  );
};

export default Feedback;
