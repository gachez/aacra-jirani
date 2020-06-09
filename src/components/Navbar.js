import React from 'react';
import '../styles/Home.css';
import jirani from '../img/jirani-logo.png';
import menu from '../img/menu.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav id="navbar">
        <Link to={"/"} style={{cursor: 'pointer'}}>
          <img id="jirani"  src={jirani} alt="navigation logo" height="25px" width="186px"/>
        </Link>    
        
        <div id="collapsing-menu">
            <Link to={"/"} style={{textDecoration: 'none', color: '#000', listStyle: 'none', fontFamily: 'Ubuntu'}}><span>Images</span></Link>
            <Link to={"/videos"} style={{textDecoration: 'none', color: '#000',  fontFamily: 'Ubuntu'}}><span>Videos</span></Link>
            <Link to={"/publications"} style={{textDecoration: 'none', color: '#000',  fontFamily: 'Ubuntu'}}><span>Publications</span></Link>
            <Link to={"/donate"} style={{textDecoration: 'none', color: '#000', fontFamily: 'Ubuntu'}}><span>Donate</span></Link>
            <Link to={"/upload"} style={{textDecoration: 'none', color: '#000', fontFamily: 'Ubuntu'}}><span>Upload</span></Link>
            <Link to={"/contact"} style={{textDecoration: 'none', color: '#000', fontFamily: 'Ubuntu'}}><span>Contact</span></Link>
        </div>

        <img id="open-menu-icon" src={menu} alt="open menu icon" width="100px" height="40px"/>
    </nav>
    )
}

export default Navbar;