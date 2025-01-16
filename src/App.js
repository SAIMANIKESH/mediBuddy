import { Component } from "react";
import { FiSearch } from "react-icons/fi";

import medArr from "./ApiConfig";
import Header from "./components/Header";
import Icons1 from "./components/Icons1";
import Banner from "./components/Banner";
import Features from "./components/Features";
import LabTests from "./components/LabTests";
import ActiveBooking from "./components/ActiveBooking";
import Trusted from "./components/Trusted";
import Feedback from "./components/Feedback";
import LifeStyle from "./components/LifeStyle";
import Working from "./components/Working";
import Faqs from "./components/Faqs";

import "./App.css";

const medArray = medArr()[0].page_config;

const iconsList = medArray[0].props;

class App extends Component {
  state = { userInput: "" };

  onUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const { userInput } = this.state;
    return (
      <>
        <Header />
        <div className="App col-12 mt-5">
          {/* search bar section */}
          <div className="search-bar mt-3">
            <input
              type="search"
              value={userInput}
              placeholder="Find lab tests, diagnostics center"
              onChange={this.onUserInput}
              className="search"
            />
            <FiSearch size="20px" color="gray" />
          </div>

          {/* icons container section */}
          <div className="icons-container mt-3">
            <ul className="items-list d-flex flex-row p-0 m-0 col-12 mt-4">
              {iconsList.map((eachItem) => (
                <Icons1 key={eachItem.iconText} details={eachItem} />
              ))}
            </ul>
          </div>

          {/* banners section */}
          <div className="carousel-container mt-3 mb-0">
            <Banner />
          </div>
        </div>

        {/* health checkup features section */}
        <div className="col-12 mt-2">
          <Features details={medArray[2]} />
        </div>

        {/* User's Active Bookings Section */}
        <div className="col-12">
          <ActiveBooking />
        </div>

        {/* Booking Popular Lab Tests Section */}
        <div className="col-12">
          <LabTests details={medArray[2]} />
        </div>

        {/* Trusted source */}
        <div className="col-12">
          <Trusted details={medArray[7].props} />
        </div>

        {/* Users Feedback source */}
        <div className="col-12">
          <Feedback details={medArray[5]} />
        </div>

        {/* Life Style Section */}
        <div className="col-12">
          <LifeStyle details={medArray[3]} />
        </div>

        {/* How it works Section */}
        <div className="col-12">
          <Working details={medArray[6].props[0]} />
        </div>

        {/* FAQs Section */}
        <div className="col-12">
          <Faqs details={medArray[6]} />
        </div>
      </>
    );
  }
}

export default App;
