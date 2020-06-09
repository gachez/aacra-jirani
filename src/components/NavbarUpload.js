import React from 'react';
import '../styles/Home.css';
import cancel from '../img/buttons_cancel.png';
import orangeback from '../img/back.png';
import { Link } from 'react-router-dom';
import next from '../img/next.png';


function NavbarUpload() {
    return(
        <nav className="navbar">
        <div><span>Type</span>
        <span>Tags</span>
        <span>Content</span>
        <span>Preview</span>
        <span>Upload</span></div>

        <img className="cancel" src={cancel} alt="cancel" />
        <img className="" src={next} alt="next" />

        <img className="back" src={orangeback} alt="back"/>
  
    </nav>
    )
}

export default NavbarUpload;