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
    content: `Our Con-Ed Web Development courses are designed for tech-savvy beginners - no prior experience is necessary. Each class is exercise-heavy, and our 10:1 student to mentor ratio means that you won’t ever feel left behind. In addition to in-class exercises, there are plenty of additional take-home exercises and coding challenges to sharpen your skills. You’ll leave these courses with beautiful, portfolio-ready websites built from scratch.`,
    date:`july 2018`
    },
    {
    title: 'JavaScript Fundamentals',
    content: `Add more depth to your websites with our Part-Time JavaScript courses. In Fundamentals you will start with the basics of functional programming, like objects, arrays, and jQuery. In Advanced, you’ll cover APIs and AJAX, promises, and React basics, among other topics. You will leave these courses with the perfect addition to your front-end skillset.`,
    date:`october 2018`
    },
    {
    title: `Web Development Immersive (Bootcamp)`,
    content: `There are lots of places you can learn to code. Our Web Development Immersive (Bootcamp) is for you if you're ready to take the leap to pursue a career as a Front-End Developer. Your experience in this program is about more than just taking a deep dive into JavaScript and React. With curriculum focused on current industry best practices led by a world-class instructor team, you’ll graduate from HackerYou with the skills and knowledge you'll need to land a junior front-end developer position. We're the experts in getting you there.`,
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


