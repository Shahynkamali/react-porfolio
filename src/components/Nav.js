import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import posed from 'react-pose';


const Sidebar = posed.ul({
  open: {
    x: '0%',
    delay:400,
    delayChildren: 600,
    staggerChildren: 300
  },
  closed: { x: '-100%', delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})



class Nav extends Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
render(){
  const { isOpen } = this.state;
  return (
    <nav>
    <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Item><NavLink exact className="link" activeClassName="active" to="/">About</NavLink></Item>
        <Item><NavLink exact className="link" activeClassName="active" to="/projects">Projects</NavLink></Item>
        <Item><NavLink exact className="link" activeClassName="active" to="/resume">Courses</NavLink></Item>
        <Item><NavLink exact className="link" activeClassName="active" to='/skills'>Skills</NavLink></Item>
        <Item><NavLink exact className="link" activeClassName="active" to='/contact'>Contact</NavLink></Item>
    </Sidebar>
    </nav>
  
  )

}
}

export default Nav;
