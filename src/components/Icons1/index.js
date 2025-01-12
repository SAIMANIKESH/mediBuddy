import "./index.css";

const Icons1 = (props) => {
  const { details } = props;
  const { iconText, iconUrl } = details;

  return (
    <li className="list-item col-4 mt-1">
      <img src={`${iconUrl}`} alt={`${iconText}`} className="image" />
      <p className="text mt-2">{iconText}</p>
    </li>
  );
};

export default Icons1;
