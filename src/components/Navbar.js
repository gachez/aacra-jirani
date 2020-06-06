import React from 'react';
import '../styles/Home.css';
import jirani from '../img/jirani-logo.png';
import menu from '../img/menu.png';

function Navbar() {
    return(
        <nav id="navbar">
        <img id="jirani" src={jirani} alt="navigation logo" height="25px" width="186px"/>
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