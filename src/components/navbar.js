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
        <div className='backnavColor fixed-top'>
            <Container className="px-5">
                <Navbar variant='dark' expand="lg" >
                    <Navbar.Brand href="#home">                                    
                        <img className='navLogo' alt="logo" src={logo} />
                        {/* <span className="text-success dim">&#46;</span>  */}
                    </Navbar.Brand>           
                    <Navbar.Toggle className='navbar-toggle-btn' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 ms-5 mt-2 justify-content-evenly ">                                   
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#home">Home <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#about-us">About Us <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#services">Service <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#experiences">Experience <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#porfolio">Portfolio <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#blog">Blog <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>
                            <Nav.Link  className="navbar-link flex-sm-row flex-lg-column " href="#contact">Contact <span className='animationLine ms-sm-5 m-lg-0'></span></Nav.Link>                                 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
            </Container>
        </div>
    )  
    
}
export default NavBar;