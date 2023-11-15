import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './PartnerSlider.css'
const PartnerSlider = () => {
  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2>Our Partners</h2>
      <Slider {...settings}>
        <div><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Partner Logo" /></div>
        <div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Partner Logo" /></div>
        {/* ... Add the rest of your images here */}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
