import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slider-item">
          <img src="/slide1.jpg" alt="Ad slide" />
        </div>
        <div className="slider-item">
          <img src="/slide2.jpg" alt="Ad slide" />
        </div>
        <div className="slider-item">
          <img src="/slide3.jpg" alt="Ad slide" />
        </div>
        <div className="slider-item">
          <img src="/slide4.jpg" alt="Ad slide" />
        </div>
      </Slider>
    </>
  );
};

export default SliderComp;
