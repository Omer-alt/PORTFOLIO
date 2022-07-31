import React from 'react'
import '../styles/banner.css'
import banner from '../assets/firsImg.jpeg'
import {Container, Col, Row,Card,Button } from 'react-bootstrap'


const Banner = () => {
  return (
    <Container fluid >
        <Row >
            <img id='scrollTop' src={banner} className="bgProfil" alt="backgroundProfil"/> 
            <div className='bannerOverlay col-6' >
                <span className='bTitle'>Web App Developper</span>
                <h1 className='bName mt-lg-1 mb-2'>Omer-alt FOTSO</h1>
                <p className='bTexte'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
                    tempor incididunt ut dolor the sit amet consectetur adipisicing
                    elit sed do consectetur labore et dolo
                </p>
                <Button className='btEffect mt-lg-5' variant="success" size='lg'>VIEW MORE</Button>
            </div>
            <div className='col-6'></div>
        </Row>
    </Container>
  )
}

export default Banner