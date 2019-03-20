import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const About = () => {
return (
<section className="wrapper">

    <div className="about-me">
        <ScrollAnimation animateIn='fadeInLeft'
        animateOut='flipOutY'>
        <div className="header">
            <h2>about me</h2>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight'
        animateOut='fadeOutLeft'>
        <div className="stories">
            <div className="about-me-image">
                <img src={require("../assets/background.jpg")} alt="of shahyn kamali" />
            </div>
            <div className="my-philosophy">
                <div className="my-philosophy-header">
                    <h3>Thats me on an active volcano!</h3>
                    <p>I am a front end developer, graduate of the HackerYou college of Technology with a passion for building interactive websites! 
In a previous life I was crawling through wines cellars as a sommelier but I always had an interest in technology which allowed me to start coding. 
The hospitality industry taught me how to create unique user experiences for guests and I apply the same mindset for when I build a website! 
If I have a couple weeks to spare, you can find me traveling around the world finding pristine beaches and challenging hikes!</p>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    </div>
</section>
)
}
export default About