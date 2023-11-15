import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './PartnerSlider.css'
const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  ];
  
const PartnerSlider = () => {
    return (
        <div className="slider mt-5">
          <div className="slide-track">
            {images.map((src, index) => (
              <div className="slide" key={index}>
                <img src={src} height="100" width="250" alt="" />
              </div>
            ))}
            {/* Duplicate images for infinite effect */}
            {images.map((src, index) => (
              <div className="slide" key={`duplicate-${index}`}>
                <img src={src} height="100" width="250" alt="" />
              </div>
            ))}
          </div>
        </div>
      );
};

export default PartnerSlider;
