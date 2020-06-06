import React from 'react';
import orange from '../img/logo-orange.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';

function Footer() {
    return(
    <footer className="footer">
          <img className="footer-logo" alt="orange logo" src={orange}/>      
          <span className="copyright">Copyright.All Rights Reserved.2020</span>     
          <div className="navigation-footer">
              <span>Home</span>
              <span>Donate</span>
              <span>About</span>
              <span>Contact</span>
          </div>
          <span className="find-us">Find us online</span>
          <div className="social-icons">
              <img src={facebook} alt="facebook icon"/>
              <img src={twitter} alt="twiiter icon"/>
              <img src={instagram} alt="instagram icon"/>
              <img src={linkedin} alt="linkedin icon"/>
          </div>
  </footer>
    )
}

export default Footer;