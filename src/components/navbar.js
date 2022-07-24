import React from 'react'
import '../styles/navBar.css'
import AboutUs from './AboutUs';
import { Navbar,Nav,Col,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';


const NavBar = () => { 
    return (
        <div className='backnavColor'>
            <Container className="px-5">
                <Navbar variant='dark' expand="lg" sticky="top">
                    <Navbar.Brand href="#home">                                    
                        <img className='navLogo' alt="logo" src={logo} />
                        <span className="text-success dim">&#46;</span>                                  
                    </Navbar.Brand>           
                    <Navbar.Toggle className='navbar-toggle-btn' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 ms-5 justify-content-evenly">                                   
                            <Nav.Link className="navbar-link" href="#">Home</Nav.Link>
                            <Nav.Link className="navbar-link" href="#about-us">About Us</Nav.Link>
                            <Nav.Link className="navbar-link" href="#services">Service</Nav.Link>
                            <Nav.Link className="navbar-link" href="#experience">Experience</Nav.Link>
                            <Nav.Link className="navbar-link" href="#porfolio">Portfolio</Nav.Link>
                            <Nav.Link className="navbar-link" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="navbar-link" href="#contact">Contact</Nav.Link>                                 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
            </Container>
        </div>
    )  
    
}
export default NavBar;