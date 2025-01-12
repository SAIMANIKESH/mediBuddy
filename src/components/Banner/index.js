import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel controls={false} indicators={false} fade={false} pause={"hover"}>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/mb-config/IMAGE/philips_track_your_health_labs_banner_1731064505053.png"
          alt="health1"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/mb-config/IMAGE/labs_sunday_slots_banner_1734692906235.png"
          alt="health2"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/labs/HomeScreenBanners/AndroidMB/labs-surgery-banner.jpg"
          alt="health3"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/labs/HomeScreenBanners/web/diagnostic-banner.png"
          alt="health4"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/labs/HomeScreenBanners/web/vitamin-bone.png"
          alt="health5"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src="https://views.medibuddy.in/labs/HomeScreenBanners/AndroidMB/sameday.png"
          alt="health6"
          className="d-block w-100"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
