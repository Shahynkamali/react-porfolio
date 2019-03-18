import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Gallery = () => {
  return (
    <section className="wrapper">
      <div className="gallery">
        <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>>
        <div className="gallery-row">
          <div className="gallery-img">
          <div className="content-overlay"></div>
            <img src={require("../assets/foto1.jpg")} alt="of shahyn kamali" />
            <div className="content-details fadeIn-bottom">
              <h4 className="content-title">traveler</h4>
            </div>
          </div>
          <div className="gallery-img">
            <img src={require("../assets/foto2.jpg")} alt="of shahyn kamali" />
            <div className="content-details fadeIn-bottom">
              <h4 className="content-title">sommelier</h4>
            </div>
          </div>
          <div className="gallery-img">
            <img src={require("../assets/foto3.jpg")} alt=" of shahyn kamali" />
            <div className="content-details fadeIn-bottom">
              <h4 className="content-title">developer</h4>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Gallery;
