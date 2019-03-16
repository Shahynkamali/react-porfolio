import React from "react";

const Gallery = () => {
  return (
    <section className="wrapper">
      <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-img">
          <div class="content-overlay"></div>
            <img src={require("../assets/foto1.jpg")} alt="of shahyn kamali" />
            <div class="content-details fadeIn-bottom">
              <h4 className="content-title">traveler</h4>
            </div>
          </div>
          <div className="gallery-img">
            <img src={require("../assets/foto2.jpg")} alt="of shahyn kamali" />
            <div class="content-details fadeIn-bottom">
              <h4 className="content-title">sommelier</h4>
            </div>
          </div>
          <div className="gallery-img">
            <img src={require("../assets/foto3.jpg")} alt=" of shahyn kamali" />
            <div class="content-details fadeIn-bottom">
              <h4 className="content-title">developer</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
