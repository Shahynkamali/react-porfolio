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
                    <h3>who is shahyn?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, id ullam! Consectetur illum earum optio numquam sapiente, ullam voluptate eveniet iste minus, sed officiis aspernatur perspiciatis laudantium aperiam suscipit temporibus! Optio nobis minima aliquid libero neque modi explicabo doloremque id.</p>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    </div>
</section>
)
}
export default About