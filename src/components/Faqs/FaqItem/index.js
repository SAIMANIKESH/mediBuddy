import { Component } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import "./index.css";

class FaqItem extends Component {
  state = { isActive: false };

  renderListItem = (val) => {
    return <li className="">{val.pnt}</li>;
  };

  renderAnswer = () => {
    const { faqDetails } = this.props;
    const { answer, points } = faqDetails;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div className="">
          <p className="answer mb-1">{answer}</p>
          <ul className="d-flex flex-column faqItem-list">
            {points.map((eachItem) => this.renderListItem(eachItem))}
          </ul>
        </div>
      );
    }
    return null;
  };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveImage = () => {
    const { isActive } = this.state;
    const icon = isActive ? (
      <FiMinusCircle color="gray" size={22} className="arr" />
    ) : (
      <FiPlusCircle color="gray" size={22} className="arr" />
    );

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        {icon}
      </button>
    );
  };

  componentDidMount = () => {
    const { faqDetails } = this.props;
    const { id } = faqDetails;
    if (id === 2) {
      this.setState({ isActive: true });
    }
  };

  render() {
    const { faqDetails } = this.props;
    const { question, id } = faqDetails;

    return (
      <li className="faq-item">
        <div className="question-container d-flex justify-content-between align-items-center">
          <h1 className="question">{question}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
        {id !== 9 ? <hr className="horizontal-line" /> : ""}
      </li>
    );
  }
}

export default FaqItem;
