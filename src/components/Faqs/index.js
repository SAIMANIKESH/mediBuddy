import FaqItem from "./FaqItem";

import "./index.css";

const Faqs = (property) => {
  const { details } = property;
  const { title, props } = details;

  return (
    <div className="p-3 pt-0">
      <h1 className="heading blue mt-0 mb-3">{title}</h1>
      <ul className="items-list d-flex flex-column p-0 faq-margin">
        {props.map((eachItem) =>
          eachItem.isExpanded === false ? (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Faqs;
