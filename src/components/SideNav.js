import React from 'react';
import {NavLink} from 'react-router-dom';


const SideNav =()=> {
  return (
   <div className="res-nav">
                <NavLink exact className="link" activeClassName="active" to="/">About</NavLink>
                <NavLink exact className="link" activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink exact className="link" activeClassName="active" to="/resume">Courses</NavLink>
                <NavLink exact className="link" activeClassName="active" to='/skills'>Skills</NavLink>
                <NavLink exact className="link" activeClassName="active" to='/contact'>Contact</NavLink>
            </div>
  )
}

export default SideNav
