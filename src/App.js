import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <div className="main">
          <Nav/> 
          <Route path='/'  exact component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/contact' component={Contact}/>

        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
