import React from 'react'
import '../styles/navBar.css'
import AboutUs from './AboutUs';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

const NavBar = () =>{ 
    
    return(
        <div className='backnavColor'>
            <Container >
                <div className="row">
                    <Router>
                        <Navbar variant='dark' expand="lg" sticky="top">
                            <div className='col-lg-2'>
                                <Navbar.Brand href="#home" >                                    
                                    <img className='navLogo' alt="logo" src={logo} />
                                    <span className="text-success dim">&#46;</span>                                  
                                </Navbar.Brand>
                            </div>                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav></Nav>
                                <Nav >                                   
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                    <Nav.Link href="/service">Service</Nav.Link>
                                    <Nav.Link href="/experience">Experience</Nav.Link>
                                    <Nav.Link href="/porfolio">Portfolio</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>                                 
                                </Nav>
                            </Navbar.Collapse>
                        
                        </Navbar>
                        <br />
                        <Routes>
                            <Route exact path="/">
                                        {/* <Home /> */}
                            </Route>
                            <Route path="/about-us" element={AboutUs}/>
                                
                           
                            <Route path="/contact-us">
                                        {/* <ContactUs /> */}
                            </Route>
                        </Routes>
                    </Router>              
                        
                </div>
            </Container>
        </div>
    )  
    
}
export default NavBar;