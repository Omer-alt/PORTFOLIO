import React,{useEffect} from 'react';
import  AOS  from 'aos';
import "aos/dist/aos.css";
import '../styles/AboutUs.css'
import AboutMe from '../assets/Aboutme.png'
import { Waypoint } from "react-waypoint";
import { WiDirectionUp } from "react-icons/wi";
import {Container, Col, Row,Button } from 'react-bootstrap'

const AboutUs = ({handleWayPointLeave}) => {
    // initialise AOS
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
        <a name="about-us"></a>
        <div className='AboutUs'>
            <Container className='pt-5' fluid>
                <Row className='pt-5'>
                    <Col  md={5} >
                        <div data-aos="fade-up">
                            <img className='mt-md-5' style={{width:"50vh"}} src={AboutMe} alt='about profil'/>
                        </div>
                        <div>
                            <h5 className='aboutName'>Omer-alt FOTSO</h5>
                            <p className='aboutProfil'>Ux/Ui Designer</p>
                        </div>
                    </Col>
                    <Col md={7} className='aboutRight'>
                        <div className='aboutRightFirst' >
                            <h1 className='subTitle'><span className='subTitleUnderline'>Ab</span>out us</h1>
                            <p className='Aparagraph'>
                                It is a long established fact that a reader will be distracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum th that it has a ore-or-less normal distributi.
                            </p>
                            <p className='Aparagraph'>
                                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident
                            </p>
                        </div>
                        <Waypoint onEnter={()=>{handleWayPointLeave()}}  />
                        <div className='aboutRightSecond'>
                            <h1 className='aboutSoubTitle'>Personal Info</h1>
                            <div className='aboutPersonalCols'>
                                <div className='apCols'>
                                    <div>
                                        <span className='aboutPInfo'>Name:</span>
                                        <span> Detery Plakson</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>Age:</span>
                                        <span>24 years</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>Nationality:</span>
                                        <span>USA</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>Freelance:</span>
                                        <span>Available</span>
                                    </div>
                                </div>
                                <div className='apCols'>
                                    <div>
                                        <span className='aboutPInfo'>Adress:</span>
                                        <span>California, USA</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>phone:</span>
                                        <span>258-963-1472</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>Skepe:</span>
                                        <span>Deteryplakson22</span>
                                    </div>
                                    <div>
                                        <span className='aboutPInfo'>E-mail:</span>
                                        <span>Plakson@gmail.com</span>
                                    </div>
                                </div>                           
                            </div>
                            {/* {window.pageYOffset !==0 ?
                                <a href='#scrollTop' style={{color:"#FFF"}}>
                                    <div className='GoAtStarting'>
                                        <WiDirectionUp style={{height:"46px", width:"44px", marginInline:"3px"}}/>
                                    </div>
                                </a>
                                : null
                            } */}
                            
                            
                            <Button className='baboutEffect mt-lg-5' variant="success" size='lg'>DOWNLOAD CV</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default AboutUs