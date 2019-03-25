import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const About = () => {
return (
<section className="wrapper">
    <div className="about-me" id="maincontent">
    <ScrollAnimation animateIn='fadeInLeft'animateOut='flipOutY'>
        <div className="header">
            <h2>about me</h2>
        </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'>
        <div className="stories">
            <div className="about-me-image">
                <img src={require("../assets/background.jpg")} alt="of shahyn kamali" />
            </div>
            <div className="my-philosophy">
                <h3>That's me on an active volcano!</h3>
                <p>Hi, I’m Shahyn.
                    I’m a HackerYou College of Technology graduate with a passion for building interactive websites!  In a previous life, I spent my days crawling through wine cellars as a Sommelier but my curiosity and interest in technology lead me to switch paths and pursue a career as a Front-End Developer instead. The hospitality industry taught me how to create unique user experiences for guests and I apply that same mindset to the websites I build.  If I have a couple weeks to spare, you can find me traveling to a new destination in search of pristine beaches and interesting food to try.</p>
            </div>
        </div>
    </ScrollAnimation>
    </div>
</section>
)
}
export default About