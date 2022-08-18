import React from 'react'
import '../styles/banner.css'
import banner from '../assets/firsImg.jpeg'
import {Container, Col, Row,Card,Button } from 'react-bootstrap'


const Banner = () => {
  return (
    <Container  fluid>
      <Row style={{paddingLeft:"0px",paddingRight:"0px"}}>
        <a name="home"></a>
        <Card className="bg-dark text-white">
          <Card.Img style={{width:"100vw"}} id='scrollTop' src={banner} alt="backgroundProfil"/>
          <Card.ImgOverlay>
            <Col>
              <span className='bTitle'>Web App Developper</span>
              <Card.Title >Omer-alt FOTSO</Card.Title>
              <Card.Text className='d-none d-md-block'>
                Hello every body ...<br/>
                I am web app developper with JavaScript : Front-end with Reactjs and backend with nodejs/Expressjs
                I am also student in university of Yaounde 1 in computer Science where i get my degree in software engeneering.   

              </Card.Text>
              <Button className='btEffect mt-lg-5' variant="success" size='lg'>VIEW MORE</Button>
            </Col>
            <Col></Col>
          </Card.ImgOverlay>
        </Card>
        
      </Row>
      {/*  <Row >
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
        </Row> */}
    </Container>
  )
}

export default Banner