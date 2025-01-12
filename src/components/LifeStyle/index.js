import women from "./women.svg";
import obesity from "./obesity.svg";
import thyroid from "./thyroid.svg";
import smoking from "./smoking.svg";
import diabetic from "./diabetic.svg";

import "./index.css";

const LifeStyle = (property) => {
  const { details } = property;
  const { title, props } = details;

  const listItem = (val) => {
    let svg = null;
    if (val.value === "wh") svg = women;
    else if (val.value === "ti") svg = thyroid;
    else if (val.value === "sa") svg = smoking;
    else if (val.value === "db") svg = diabetic;
    else svg = obesity;

    return (
      <li className="list-item ls-design col-4 m-1 shadow-sm">
        <img src={svg} alt={`${val.value}`} className="image mt-3" />
        <p className="text text-center blue mt-2">{val.title}</p>
      </li>
    );
  };

  return (
    <div className="p-3 pt-3">
      <h1 className="heading blue mt-0 mb-3">{title}</h1>
      <ul className="items-list d-flex flex-row justify-content-between m-0 p-0 mt-2">
        {props.map((eachItem) => listItem(eachItem))}
      </ul>
    </div>
  );
};

export default LifeStyle;
