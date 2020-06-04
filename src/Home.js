import React from 'react';
import './styles/Home.css';
import {Container, Col, Row} from 'react-bootstrap';
import logo from './img/logo.png';
import sublogo from './img/sublogo.png';
import jirani from './img/jirani-logo.png';
import menu from './img/menu.png';


function Home() {
    return (
        <div>

            <header id="logo-section">
                <img id="logo" src={logo} height="74.24px" alt="African art critical resources"/>
                <div id="sub-logo"><img src={sublogo} alt="framing your artistic experience"/></div>
            </header>
            
            <br />
            
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
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                    
             
            </Container>
            
        </div>
    )
}

export default Home;