import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Typed from 'react-typed';




const About = () => {
return (
<section className="wrapper">
    <div className="about-me" id="maincontent">
    <ScrollAnimation animateIn='fadeInRight'>
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
                <Typed 
                    strings={[` <p>Hi, I’m Shahyn. I am a detail-oriented, recent graduate from HackerYou's Web Development Immersive Bootcamp who specializes in Front End Development. I aim to utilize my technical JavaScript skills and proven knowledge of web engineering and user experience to excel in the role of JavaScript Developer.</p><br/>`]} 
                    typeSpeed={30} 
                    startDelay={1000}
                    showCursor={false}
                />
                <Typed 
                    strings = {
                        [' <p>In a previous life, I spent my days managing teams in fast paced, high pressure environments within the hospitalty industry. However, my interest in technology lead me to switch paths and pursue a career as a Frontend Developer instead.</p> ']
                    }
                    typeSpeed={30} 
                    startDelay={15000}
                    showCursor={false}
                />
                <Typed 
                    strings={['<p> The hospitality industry taught me how to create unique user experiences for guests and I apply that same mindset to the websites I build.</p><br/><p>  If I have a couple weeks to spare, you can find me traveling to a new destination in search of pristine beaches and interesting food to try.</p>']} 
                    typeSpeed={30} 
                    startDelay={26000}
                    showCursor={false}
                />
            
                
            </div>
        </div>
    </ScrollAnimation>
    </div>
</section>
)
}
export default About