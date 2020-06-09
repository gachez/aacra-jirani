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
            <Link to={"/"} style={{textDecoration: 'none', coolor: '#000', listStyle: 'none'}}><span>Images</span></Link>
            <Link to={"/videos"} style={{textDecoration: 'none', coolor: '#000'}}><span>Videos</span></Link>
            <Link to={"/publications"} style={{textDecoration: 'none', coolor: '#000'}}><span>Publications</span></Link>
            <Link to={"/donate"} ><span>Donate</span></Link>
            <Link to={"/contact"}><span>Contact</span></Link>
        </div>

        <img id="open-menu-icon" src={menu} alt="open menu icon" width="100px" height="40px"/>
    </nav>
    )
}

export default Navbar;