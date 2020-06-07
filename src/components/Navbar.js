import React from 'react';
import '../styles/Home.css';
import jirani from '../img/jirani-logo.png';
import menu from '../img/menu.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav id="navbar">
        <Link to={"/"} style={{cursor: 'pointer'}}>
          <img id="jirani" src={jirani} alt="navigation logo" height="25px" width="186px"/>
        </Link>    
        
        <div id="collapsing-menu">
            <span>Home</span>
            <span>Donate</span>
            <span>About</span>
            <span>Contact</span>
        </div>

        <img id="open-menu-icon" src={menu} alt="open menu icon" width="100px" height="40px"/>
    </nav>
    )
}

export default Navbar;