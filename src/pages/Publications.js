import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import searchIcon from '../img/icons_search.png';
import navigation from '../img/nav_publications.png';
import thumbnail from '../img/afrique.jpg';
import reset from '../img/reset.png';
import next from '../img/component.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
            <Navbar />
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
    
              <Footer />
                
            </div>
        )
    }
   
}

export default Publications;