import React from 'react'
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to='about'>About</NavLink></li>
        <li><NavLink className="link" to="projects">Projects</NavLink></li>
        <li><NavLink className="link" to="resume">Resume</NavLink></li>
        <li><NavLink className="link" to='skills'>Skills</NavLink></li>
        <li><NavLink className="link" to='contact'>Contact</NavLink></li>
      </ul>
    </nav>
  
  )
}

export default Nav;
