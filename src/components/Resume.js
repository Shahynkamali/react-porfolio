import React from 'react'


const Resume = () => {
  return (
<section className="wrapper">
    <div className="resume">
        <div className="resume-header">
            <h2>my resume</h2>
        </div>
        <div className="resume-content">
            <div className="resume-block">
                <div className="resume-block-title">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Accelerated Web Development </h3>
                    <span>July 2018</span>
                </div>
                <div className="resume-block-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, esse?</p>
                </div>
            </div>
            <div className="resume-block">
                <div className="resume-block-title">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>JavaScript Fundamentals</h3>
                    <span>October 2018</span>
                </div>
                <div className="resume-block-content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, commodi.
                    </p>
                </div>
            </div>
            <div className="resume-block">
                <div className="resume-block-title">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Web Development Immersive (Bootcamp)</h3>
                    <span>January 2019</span>
                </div>
                <div className="resume-block-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, optio? </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Resume
