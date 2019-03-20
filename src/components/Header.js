import React from 'react'
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import {NavLink} from 'react-router-dom';


const Sidebar = posed.div({
    exit: {
        x: '-100%'
    },
    enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 40
    }
});

const charPoses = {
    exit: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
};

const Header = () =>{
    return (
        <React.Fragment>
    <header>
            <Sidebar className="sidebar" initialPose="exit" pose="enter">
                <div className="header-title">
                    <h1><SplitText charPoses={charPoses}>shahyn kamali</SplitText></h1>
                    <h5><SplitText charPoses={charPoses}>front end developer</SplitText></h5>
                </div>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shahyn-kamali-33019a57/"><i alt="linkedin page" className="fab fa-linkedin"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shahynsweb/?hl=en"> <i alt="instagram page" className="fab fa-instagram"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TheSommWhoCodes?lang=en"><i alt="twitter page" className="fab fa-twitter-square"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@shahynkamali"><i alt="medium page" className="fab fa-medium"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shahynkamali"><i class="fab fa-github-square"></i></a>
                </div>
            </Sidebar>
    </header>
            <div className="res-nav">
                <NavLink exact className="link" activeClassName="active" to="/">About</NavLink>
                <NavLink exact className="link" activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink exact className="link" activeClassName="active" to="/resume">Courses</NavLink>
                <NavLink exact className="link" activeClassName="active" to='/skills'>Skills</NavLink>
                <NavLink exact className="link" activeClassName="active" to='/contact'>Contact</NavLink>
            </div>
    </React.Fragment>
    
    )
}

export default Header;