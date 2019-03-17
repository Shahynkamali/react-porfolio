import React from 'react'
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink className="link" activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to='about'>About</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="projects">Projects</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="resume">Resume</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to='skills'>Skills</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to='contact'>Contact</NavLink></li>
      </ul>
    </nav>
  
  )
}

export default Nav;
