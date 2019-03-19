import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import weather from '../assets/weather.png';
import restaurant from '../assets/restaurant.png';
import planted from '../assets/planted.png';
import food from '../assets/food.png';
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
                <Card shadow={10}>
                    <CardText>
                        <CardTitle style={{color: "#fff", height: '176px', background: `url(${weather}), center / cover` }}>
                            <h3>weather app</h3>
                        </CardTitle>
                        The application is a small weather app that fetches data from the Weather API and displays it on the UX.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Shahynkamali/Weather-App">GitHub</a>
                        <a href="https://parent-joke.firebaseapp.com/">Live Version</a>
                    </CardActions>
                </Card>
            </div>
            <div className="card">
                <Card shadow={10}>
                    <CardText>
                        <CardTitle style={{color: "#fff", height: '176px', background: `url(${joke}), center / contain` }}>
                            <h3>joke generator</h3>
                        </CardTitle>
                        Group project that displays a daily joke, gets joke submissions and users can vote for the funniest joke. Data is stored in Firebase
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Shahynkamali/scoreboard">GitHub</a>
                        <a href="https://parent-joke.firebaseapp.com/">Live Version</a>
                    </CardActions>
                </Card>
            </div>
            <div className="card">
                <Card shadow={10}>
                    <CardText>
                        <CardTitle style={{color: "#fff", height: '176px', background: `url(${restaurant}) center / cover` }}>
                            <h3>restaurant list</h3>
                        </CardTitle>
                    Application that finds various restaurants in North America and stores them in a top 10 list
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Shahynkamali/scoreboard">GitHub</a>
                        <a href="https://parent-joke.firebaseapp.com/">Live Version</a>
                    </CardActions>
                </Card>
            </div>
        </div>

        )
} else if(this.state.activeTab === 1){
    return (
        <div className="cards">
        <div className="card">
                <Card shadow={10}>
                    <CardText>
                        <CardTitle style={{color: "#fff", height: '176px', background: `url(${food}) center / cover` }}>
                            <h3>recipe and wine finder</h3>
                        </CardTitle>
                    Application that finds various restaurants in North America and stores them in a top 10 list
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Shahynkamali/scoreboard">GitHub</a>
                        <a href="https://parent-joke.firebaseapp.com/">Live Version</a>
                    </CardActions>
                </Card>
            </div>
    </div>


        )
} else if (this.state.activeTab === 2){
    return (
        <div className="cards">
        <div className="card">
                <Card shadow={10}>
                    <CardText>
                        <CardTitle style={{color: "#fff", height: '176px', background: `url(${planted}) center / cover` }}>
                            <h3>planted</h3>
                        </CardTitle>
                    Application that finds various restaurants in North America and stores them in a top 10 list
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Shahynkamali/scoreboard">GitHub</a>
                        <a href="https://parent-joke.firebaseapp.com/">Live Version</a>
                    </CardActions>
                </Card>
            </div>
    </div>		
        )
}
}
render() {
    return (
        
  
    <div className="wrapper">
            <div className="catergory-tabs">
                <ScrollAnimation animateIn='fadeInRight'
                    animateOut='fadeOutLeft'>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>Jquery</Tab>
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
