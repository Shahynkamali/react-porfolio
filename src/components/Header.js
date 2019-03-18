import React from 'react'
import posed from 'react-pose';
import SplitText from 'react-pose-text';

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
    <header>
        <div className="title">
            <Sidebar className="sidebar" initialPose="exit" pose="enter">
                <div className="header-title">
                    <h1><SplitText charPoses={charPoses}>shahyn kamali</SplitText></h1>
                </div>
                <div className="header-desc">
                    <h5><SplitText charPoses={charPoses}>I am a front end developer</SplitText></h5>
                </div>
            </Sidebar>
            
        </div>   
    </header>
    )
}

export default Header;