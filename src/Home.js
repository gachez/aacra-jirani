import React from 'react';
import './styles/Home.css';
import logo from './img/logo.png';
import sublogo from './img/sublogo.png';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Home() {
    return (
        <div>

            <header id="logo-section">
                <img id="logo" src={logo} height="74.24px" alt="African art critical resources"/>
                <div id="sub-logo"><img src={sublogo} alt="framing your artistic experience"/></div>
            </header>
            
            <br />
            
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default Home;