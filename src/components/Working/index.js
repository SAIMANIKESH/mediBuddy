import microscope from "./microscope.svg";
import runner from "./runner.svg";
import message from "./message.svg";

import "./index.css";

const Working = (property) => {
  const { details } = property;
  const { question, points } = details;

  const listItem = (val) => {
    let svg = null;
    if (val.idx === 1) svg = microscope;
    else if (val.idx === 2) svg = runner;
    else svg = message;

    return (
      <li className="working-list-item d-flex m-1">
        <img src={svg} alt={`${val.idx}`} className="images" />
        <p className="working-text mb-2">{val.pnt}</p>
      </li>
    );
  };

  return (
    <div className="p-3 pt-3">
      <h1 className="heading blue mt-0 mb-3">{question}</h1>
      <ul className="items-list d-flex flex-column p-0 mt-2">
        {points.map((eachItem) => listItem(eachItem))}
      </ul>
    </div>
  );
};

export default Working;
