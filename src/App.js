import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Nav/>
        <Route path="/" exact component={Header} />
        <Route path='/projects' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        
      </div>
      </Router>
    );
  }
}

export default App;
