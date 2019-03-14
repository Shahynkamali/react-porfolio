import React from 'react'
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="projects">Projects</NavLink></li>
        <li><NavLink to="resume">Resume</NavLink></li>
        <li><NavLink to='skills'>Skills</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
      </ul>
    </div>
  
  )
}

export default Nav;
