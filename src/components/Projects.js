import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import weather from '../assets/weather.webp';
import restaurant from '../assets/restaurant.webp';
import planted from '../assets/planted.webp';
/* import food from '../assets/food.png'; */
import joke from '../assets/joke.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Projects extends Component {
    state ={
        activeTab: 0
        
    }
toggleCatagories(){
if(this.state.activeTab === 0){
    return( 
        <div className="cards">
            <div className="card">
                <div className="flipcard">
                    <div className="flipcard_front">
                        <div className="flipcard_front_background">
                            <div className="flipcard_front_image">
                                <img src={weather} alt=""/>
                            </div>
                            <div className="flipcard_front_title">
                                <h3>Weather App</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flipcard_back">
                        <div className="flipcard_description">
                            <div className="flipcard_back_title">
                                <h3>Weather App</h3>
                            </div>
                        <p>The application is a small weather app that fetches data from the Weather API and displays it on the UX.</p>
                        <div className="flipcard_actions">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shahynkamali/Weather-App"><i className="fab fa-github tooltip" ></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="flipcard">
                    <div className="flipcard_front">
                        <div className="flipcard_front_background">
                            <div className="flipcard_front_image">
                                <img src={joke} alt=""/>
                            </div>
                            <div className="flipcard_front_title">
                                <h3>Joke App</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flipcard_back">
                        <div className="flipcard_description">
                            <div className="flipcard_back_title">
                                <h3>Joke App</h3>
                            </div>
                         <p>Project that displays a daily joke, gets joke submissions and users can vote for the funniest joke. Data is stored in Firebase</p>
                        <div className="flipcard_actions">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shabora/parent-joke-project-6"><i className="fab fa-github tooltip" ></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://parent-joke.firebaseapp.com/"><i className="fab fa-internet-explorer"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="flipcard">
                    <div className="flipcard_front">
                        <div className="flipcard_front_background">
                            <div className="flipcard_front_image">
                                <img src={restaurant} alt=""/>
                            </div>
                            <div className="flipcard_front_title">
                                <h3>Restaurant App</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flipcard_back">
                        <div className="flipcard_description">
                            <div className="flipcard_back_title">
                                <h3>Restaurant App</h3>
                            </div>
                            <p>Application that finds various restaurants in North America and stores them in a top 10 list. Data is stored in Firebase</p>
                        <div className="flipcard_actions">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shahynkamali/react_project_5"><i className="fab fa-github tooltip" ></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://javascript-project-5.firebaseapp.com/"><i className="fab fa-internet-explorer"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
} else if(this.state.activeTab === 2){
    return (
        <div className="cards">
        <div className="card">
                <div className="flipcard">
                    <div className="flipcard_front">
                    <div className="flipcard_front_title">
                        <h3>Joke Supply App</h3>
                    </div>
                        <div className="flipcard_front_background">
                        <img src={restaurant} alt=""/>
                    </div>
                    </div>
                    <div className="flipcard_back">
                        <div className="flipcard_description">
                            <p>UC Berkeley CogSci Major with Concentration on Artificial Intelligence</p>
                            <button title='Visit Website' onClick="window.open('https://jakehong0521.github.io')"><i className="fa fa-external-link"></i></button>
                            <button title="Github Page" onClick="window.open('https://github.com/jakehong0521/jakehong0521.github.io')"><i className="fa fa-github"></i></button>
                        </div>
                    </div>
                </div>
        </div>
    </div>


        )
} else if (this.state.activeTab === 1){
    return (
        <div className="cards">
            <div className="card">
                <div className="flipcard">
                    <div className="flipcard_front">
                        <div className="flipcard_front_background">
                            <div className="flipcard_front_image">
                                <img src={planted} alt=""/>
                            </div>
                            <div className="flipcard_front_title">
                                <h3>PSD Conversion</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flipcard_back">
                        <div className="flipcard_description">
                            <div className="flipcard_back_title">
                                <h3>PSD Conversion</h3>
                            </div>
                            <p>PSD Designer project creating a multi page website using CSS Grid and Flexbox</p>
                        <div className="flipcard_actions">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shahynkamali/shahyn-kamali-project-two"><i className="fab fa-github tooltip" ></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://shahynkamali.github.io/shahyn-kamali-project-two/"><i className="fab fa-internet-explorer"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>		
        )
}
}
render() {
    return (
        
    <div className="wrapper">
            <div className="catergory-tabs" id="maincontent">
                <ScrollAnimation animateIn='fadeInRight'>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                       {/*  <Tab>Jquery</Tab> */}
                        <Tab>SCSS</Tab>
                    </Tabs>
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCatagories()}</div>
                        </Cell>
                    </Grid>
                </ScrollAnimation>
            </div>
    </div>
    )
}
}

export default Projects
