import { BsPersonCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import Carousel from "react-bootstrap/Carousel";

import "./index.css";

const ActiveBooking = (props) => {
  const profile = (val) => {
    return (
      <div className="profile-list-item mt-3 p-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <div className="d-flex">
              <BsPersonCircle size={19} className="arr mt-1 mb-1" />
              <p className="text user-space mb-1">{val.name}</p>
            </div>
            <div className="d-flex">
              <FaCheckCircle size={20} color="#01aa12" className="arr mb-3" />
              <h6 className="blood-count-heading mb-3">
                Appointment Confirmed
              </h6>
            </div>
          </div>
          <div className="right-circle shadow-sm mb-4">
            <GoChevronRight color="blue" size={24} />
          </div>
        </div>
        <div className="timings-container d-flex flex-row align-items-center">
          <div className="d-flex flex-column vertical text-center p-2 pb-0 pt-0">
            <p className="text mb-0 mt-0">{val.schedule.date}</p>
            <p className="para mb-0">{val.schedule.day}</p>
          </div>
          <div className="d-flex flex-column vertical text-center p-2 pb-0 pt-0">
            <p className="text mb-0 mt-0">09:30-10:30 AM</p>
            <p className="para mb-0">Home Sample Collection</p>
          </div>
          <div className="d-flex flex-column text-center">
            <p className="text p-2 pb-0 pt-0 mt-0 mb-0">
              {val.count} <span className="para">Lab Tests</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Banner = () => {
    const { details } = props;

    return (
      <Carousel controls={false} indicators={false} pause={"hover"}>
        <Carousel.Item interval={2500}>{profile(details[0])}</Carousel.Item>
        <Carousel.Item interval={2500}>{profile(details[1])}</Carousel.Item>
        <Carousel.Item interval={2500}>{profile(details[2])}</Carousel.Item>
        <Carousel.Item interval={2500}>{profile(details[3])}</Carousel.Item>
      </Carousel>
    );
  };

  return (
    <div className="pt-4 pb-4 p-3">
      <div className="headline mb-1">
        <h1 className="heading">Your Active Bookings</h1>
        <button className="button">View All</button>
      </div>
      {Banner()}
    </div>
  );
};

export default ActiveBooking;
