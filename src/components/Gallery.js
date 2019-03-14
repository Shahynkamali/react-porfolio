import React from 'react'

const Gallery = () => {
  return (
<section className="wrapper">
    <div className="gallery">
        <div className="gallery-row">
            <div className="gallery-img">
                <img src={ require ('../assets/foto1.jpg')} alt="of shahyn kamali"/>
            </div>
            <div className="gallery-img">
                <img src={require('../assets/foto2.jpg')} alt="of shahyn kamali"/>
            </div>
            <div className="gallery-img">
                <img src={require('../assets/foto3.jpg')} alt=" of shahyn kamali"/>
            </div>
        </div>
    </div>
</section>
)
}

export default Gallery
