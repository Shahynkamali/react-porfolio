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
    title: 'Web Development Immersive (Bootcamp)',
    content: `Full-Time,9 week course focused on advanced HTML/CSS & JavaScript(ES6). During this period we created 4 individual projects and 2 group projects.  The curriculum included HTML, CSS, JavaScript, Jquery, React,Firebase and responsive web design.  The focus was on front end web development with attention to accessibility, responsive design and modern practise.`,
    date:`january 2019`
    },
    {
    title: 'JavaScript Fundamentals',
    content: `9 week Part-Time course focused on JavaScript(ES6), Jquery and React.  This course started with basic JavaScript principles and moved on to more advanced topics like promises, destructuring, and asynchronous events. We learned how to apply JavaScript libraries and what functional programming means.
`,
    date:`october 2018`
    },
    {
    title: `web development Fundamentals`,
    content: `Full-Time 2-week HTML & CSS course. During these 2 weeks we finished 2 PSD conversion projects. We learned how to structure our HTML, use semantic elements, and style our websites, writing DRY CSS.  This course also covered best practices and modern tools to write clean code`,
    date:`july 2018`  
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
                <div className="resume" id="maincontent">
                    <ScrollAnimation animateIn='fadeInRight'>
                    
                    <div className="header">
                        <h2>courses</h2>
                        <h4>All my courses were completed at HackerYou, College for Technology in Toronto, Canada</h4>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRight'>
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


