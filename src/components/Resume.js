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
                    <h3>HackerYou College of Technology </h3>
                </div>
                <div className="resume-block-content">
                    <span>July 2018</span> <p>CONTINUING EDUCATION
                    Accelerated Web Development</p>
                </div>
            </div>
            <div className="resume-block">
                <div className="resume-block-title">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>HackerYou College of Technology </h3>
                </div>
                <div className="resume-block-content">
                    <span>October 2018</span> <p>CONTINUING EDUCATION
                    JavaScript Fundamentalst</p>
                </div>
            </div>
            <div className="resume-block">
                <div className="resume-block-title">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>HackerYou College of Technology </h3>
                </div>
                <div className="resume-block-content">
                    <span>January 2019</span> <p>Web Development Immersive (BootCamp) </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Resume
