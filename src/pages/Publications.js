import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import jirani from '../img/jirani-logo.png';
import menu from '../img/menu.png';
import searchIcon from '../img/icons_search.png';
import navigation from '../img/nav_publications.png';
import imagestitle from '../img/images-title.png';
import thumbnail from '../img/afrique.jpg';
import reset from '../img/reset.png';
import orange from '../img/logo-orange.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import next from '../img/component.png';


const images = [
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp'
];

class Publications extends React.Component {
    render(){
        return (
            <div>
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
                <br />
                <Container id="body-section" fluid >
                    <Row>
                        <Col xs={1} id="first-column">
                            <img src={navigation} alt="navigation side" id="nav-side"/>
                        </Col>
                        <Col xs={8} id="second-column" >
                            <span  id="image-title">Contemporary African Art: PUBLICATIONS</span> 
                            <section id="images-grid">
                                {
                                      images.map( img => {
                                        return(
                                          <div style={{display: 'grid', margin:'30px'}}>
                                          <img  src={thumbnail} width="300px" height="150px" alt="images thumbnail"/>
                                          <span style={{padding: '10px', fontSize: '12px'}}>Home jiosoij</span>    
                                            </div>  
                                        )
                                    })         
                                }
                                                 
                            </section>
                        </Col>
                        <Col id="third-column">
    
                          <div id="search-input">
                              <input style={{position: 'absolute', right: '50px', borderBottom: 'solid 1px black',width: '200px'}} placeholder="Search title, artist" type="textbox"/>
                              <img id="searchIcon" src={searchIcon} width="18px" height="18px" />
                          </div>
    
                        <span id="side-title" style={{right: '80px'}}>View PUBLICATIONS</span>
    
                        <div className="category-box" style={{
                             position: 'absolute',
                             top: '138px',
                             right: '50px'
                        }}>
                           <span>Select a category</span>
                           <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="dropdown-box" style={{
                            top: '183px'
                        }}>
                            <span>Decorative arts</span>
                            <span>Decorative arts</span>
                            <span>Decorative arts</span>
                            <span>Decorative arts</span>
                            <span>Decorative arts</span>
                        </div>
                        
                        <br />
                        <div className="category-box" style={{
                             position: 'absolute',
                             top: '218px',
                             right: '50px'
                          }}>
                           <span>Select a format</span>
                           <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="dropdown-box" style={{
                            top: '263px'
                        }}>
                            <span>PDF</span>
                            <span>EPUB</span>
                        </div>
                        <br />
                        <div className="category-box" style={{
                             position: 'absolute',
                             top: '298px',
                             right: '50px'
                        }}>
                           <span>Select a year</span>
                           <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="dropdown-box" style={{
                            top: '343px'
                        }}>
                            <span>2020</span>
                            <span>2019</span>
                            <span>2018</span>
                            <span>2017</span>
                            <span>2016</span>
                            <span>2015</span>                    </div>
                        <img src={reset} alt="reset here" id="reset" />
    
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br /><br />
                <br /><br /><br />
                
                <div className="navigation-down">
                  <span>Contemporary African Art: IMAGES</span>
                  <img src={next} alt="next down navigation" />
                </div>
    
                <br />
                <br />
                <br />
    
                <section className="footer">
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
                </section>
                
            </div>
        )
    }
   
}

export default Publications;