import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const About = () => {
return (
<section className="wrapper">
    <div className="about-me" id="maincontent">
    <ScrollAnimation animateIn='fadeInLeft'>
        <div className="header">
            <h2>about me</h2>
        </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn='fadeInRight'>
        <div className="stories">
            <div className="about-me-image">
                <img src={require("../assets/me.jpeg")} alt="of shahyn kamali" />
            </div>
            <div className="my-philosophy">
                <p>Hi, I’m Shahyn. I’m a HackerYou College of Technology graduate with a desire for building interactive websites!</p><br/>
                <p> In a previous life, I spent my days crawling through wine cellars as a Sommelier but my curiosity and interest in technology lead me to switch paths and pursue a career as a Front-End Developer instead</p><br/>
                <p> The hospitality industry taught me how to create unique user experiences for guests and I apply that same mindset to the websites I build.</p><br/><p>  If I have a couple weeks to spare, you can find me traveling to a new destination in search of pristine beaches and interesting food to try.</p>
            </div>
        </div>
    </ScrollAnimation>
    </div>
</section>
)
}
export default About