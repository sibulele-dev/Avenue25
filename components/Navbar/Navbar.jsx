import React , { useState }from 'react';
import {GoThreeBars} from 'react-icons/go';
import { ImCross } from 'react-icons/im';


const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Services',
    href: '/services',
  },
  
];



class Navbar extends React.Component {
  
  state={ clicked: false};


  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }


  render(){
    return(
      <nav className="NavItems">
        <div className="NavContainer">
          <a 
            href="" 
            className="NavLogo"
          >
            Avenue<span>25</span>
          </a>
          <div className="MenuIcon" onClick={this.handleClick}>
            {this.state.clicked ?<ImCross className="menuBtn2" />: <GoThreeBars className="menuBtn" /> }
          </div>
          <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
            {navLinks.map((link, i) => {
              return(
                <li key={i}>
                  <a 
                    href={link.href}
                    className="navLinks"
                  >
                      {link.name}
                  </a>
                </li>
              )
            })}
            <li><a href="/contact" className="contactUs navLinks">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
