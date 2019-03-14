import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import weather from '../assets/weather.png';
import restaurant from '../assets/restaurant.png';
import planted from '../assets/planted.png';
import food from '../assets/food.png';
import joke from '../assets/joke.png';

class Projects extends Component {
 constructor(){
     super()
     this.state={
        activeTab: 0
     }
 }
toggleCatagories(){
if(this.state.activeTab === 0){
    return(
        <div className="cards">
        <div className="card">
                <Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
                    <CardText>
                    <CardTitle style={{color: "#fff", height: '176px', background: `url(${weather}), center / cover` }}>
                        Weather App
                    </CardTitle>
                        The application is a small weather app that fetches data from the Weather API and displays it on the UX.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Shahynkamali/Weather-App">GitHub</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            <div className="card">
                <Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>,
                    <CardText>
                    <CardTitle style={{color: "#fff", height: '176px', background: `url(${joke}), center / contain` }}>
                        Scoreboard 
                    </CardTitle>
                        Group project that displays a daily joke, gets joke submissions and users can vote for the funniest joke
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/Shahynkamali/scoreboard">GitHub</a></Button>
                        <Button colored><a href="https://parent-joke.firebaseapp.com/">Live Version</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            <div className="card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
                <CardText>
                <CardTitle style={{color: "#fff", height: '176px', background: 'url(https://cdn.cgmagonline.com/wp-content/uploads/2018/02/marvel-celebrates-10-years-with-epic-cast-photo-6-1280x720.jpg) center / cover' }}>
                    Marvel Characters
                </CardTitle>
                    Web application made with React and the Marvel API. Users can search Marvel characters and find information about them
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/Shahynkamali/react-marvel-app-tutorial">GitHub</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        </div>
        <div className="card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
                <CardText>
                <CardTitle style={{color: "#fff", height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JaweLrDoXIfEbVHzaIQyKPH01yeOsbeyV-w6NPEQfgG8yt8ggQ) center / cover' }}>
                    Planets
                </CardTitle>
                    Small web application made with React. One webpage containing information regarding different planets.					
                </CardText>
                <CardActions border>
                    <Button colored> <a href="https://github.com/Shahynkamali/React-Planets-Project">GitHub</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        </div>
    </div>
				
        )
} else if(this.state.activeTab === 1){
    return (
        <div className="cards">
        <div className="card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                    Jquery Project #3
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        </div>
    </div>
				
        )
} else if (this.state.activeTab === 2){
    return (
        <div className="cards">
        <div className="card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                    CSS Project #3
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        </div>
    </div>
				
        )
} else if (this.state.activeTab === 3){
    return (
        <div className="cards">
        <div className="card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: "#fff", height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                    React Project #3
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure, libero aperiam est ea amet, modi quam qui. Iusto, quisquam? Unde atque dignissimos deserunt vero dolores. Cumque hic error, facilis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        </div>
    </div>
				
        )
    }
}
	
  render() {
    return (
    <div className="catergory-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>Jquery</Tab>
        <Tab>SCSS</Tab>

        </Tabs>
				
            <Grid className="projects-grid">
                <Cell col={12}>
                <div className="content">{this.toggleCatagories()}</div>
                </Cell>
            </Grid>
	

    </div>
    )
  }
}

export default Projects
