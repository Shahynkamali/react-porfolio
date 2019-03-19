import React, { Component } from 'react'
import posed from "react-pose";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Content = posed.div({
    closed: { height: 0 },
    open: { height: "auto" }
});
const data = [
    {
    title: 'web development Fundamentals',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, esse?`,
    date:`july 2018`
    },
    {
    title: 'JavaScript Fundamentals',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, esse!`,
    date:`october 2018`
    },
    {
    title: `Web Development Immersive (Bootcamp)`,
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, esse!`,
    date:`january 2019`  
    }
]
class Resume extends Component {
    state = {
        open: false
    };
    render() {
        const { open } = this.state;
    return (
        <React.Fragment>
            <section className="wrapper">
                <div className="resume">
                    <ScrollAnimation animateIn='fadeInLeft'>
                    
                    <div className="header">
                        <h2>my resume</h2>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRight'
                    animateOut='fadeOutLeft'>
                    <div className="resume-content">
        {data.map(({ title, content, date }, i) => (
        <React.Fragment key={i}>
                    <div className="resume-block">
                    <div className="resume-block-title">
                        <h3>
                        {title}
                        </h3><span>{date}</span>
                    </div>
                    <div className="resume-button">
                        <button onClick={() => this.setState({ open: open === i ? false : i })}>Learn More</button>
                    </div>
                    <Content className="content" pose={open === i ? "open" : "closed"}>
                    <div className="content-wrapper"><p>{content}</p></div>
                </Content>
                    </div>
            </React.Fragment>
        ))}
                    </div>
                    </ScrollAnimation>
                </div>
            </section>
        </React.Fragment>
        )
    }
}
export default Resume


