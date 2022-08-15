import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import '../styles/Recommendation.css'
import RecommendItem from './tools/RecommendItem'
// slider
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Recommendation = ({data}) => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    const pathrmd1 = require("../assets/"+data.Recommendation[0].image)
    const pathrmd2 = require("../assets/"+data.Recommendation[1].image)
    const pathrmd3 = require("../assets/"+data.Recommendation[2].image)

  return (
    <div className='recommendation'>
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col className="d-flex justify-content-center" sm={12} md={10} >
                    <Carousel controls={false} style={{backgroundColor:"#212529"}} className='rmdCarousel py-5 my-4'  slide={true}>
                        <Carousel.Item interval={1000}>
                            <div className='row rmdItem'>
                                <span className='col-md-3 d-sm-flex justify-content-center   d-md-inline'>
                                    <img src={pathrmd1} className="rmdImage " alt="profil of friend" />
                                </span>
                                <div className='col-md-9' >
                                    <p className='rmdCaptionP text-left'>
                                        {data.Recommendation[0].description}
                                    </p>
                                    <div style={{float:"left"}} >
                                    <span className='rmdCaptionN'>{data.Recommendation[0].nom}</span>
                                    <span className='rmdCaptionProfession'>-{data.Recommendation[1].profession}</span>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className='row'>
                                <span className='col-md-3 d-sm-flex justify-content-center   d-md-inline'>
                                    <img src={pathrmd2} className="rmdImage " alt="profil of friend" />
                                </span>
                                <div className='col-md-9' >
                                    <p className='rmdCaptionP text-left'>
                                        {data.Recommendation[1].description}
                                    </p>
                                    <div style={{float:"left"}} >
                                    <span className='rmdCaptionN'>{data.Recommendation[1].nom}</span>
                                    <span className='rmdCaptionProfession'>-{data.Recommendation[1].profession}</span>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className='row'>
                                <span className='col-md-3 d-sm-flex justify-content-center   d-md-inline'>
                                    <img src={pathrmd3} className="rmdImage " alt="profil of friend" />
                                </span>
                                <div className='col-md-9' >
                                    <p className='rmdCaptionP text-left'>
                                        {data.Recommendation[2].description}
                                    </p>
                                    <div style={{float:"left"}} >
                                    <span className='rmdCaptionN'>{data.Recommendation[2].nom}</span>
                                    <span className='rmdCaptionProfession'>-{data.Recommendation[2].profession}</span>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* the version to correct */}
                        {/* {data.Recommendation && data.Recommendation.length > 0 && 
                        data.Recommendation.map(
                            (recommend, index)=>
                            <RecommendItem recommend={recommend} key={index}   />
                        )} */}
                    
                    </Carousel>                    
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Recommendation

// une facon de coder a adopter 
// {data.Recommendation && data.Recommendation.length > 0 && Object.keys
//     (data.Recommendation).map(
//         (recommend, index)=>{
//             console.log("recommend", recommend)
//         return (<RecommendItem recommend={data.Recommendation[recommend]} key={index}   />)}
//     )}

// @*******************************8**
{/* <Carousel.Item className='rmdItem p-4'>
                    
                    <img src={pathrmd1} className="rmdImage mx-2" alt="profil of friend" />
                    <div >
                        <p className='rmdCaptionP text-left'>{data.Recommendation[0].description}</p>
                        <div style={{float:"left"}} >
                        <span className='rmdCaptionN'>{data.Recommendation[0].nom}</span>
                        <span className='rmdCaptionProfession'>-{data.Recommendation[0].profession}</span>
                        </div>
                    </div>
                  
                </Carousel.Item>
                <Carousel.Item className='rmdItem p-4'>
                    
                    <img src={pathrmd2} className="rmdImage mx-2" alt="profil of friend" />
                    <div >
                        <p className='rmdCaptionP text-left'>{data.Recommendation[1].description}</p>
                        <div style={{float:"left"}} >
                        <span className='rmdCaptionN'>{data.Recommendation[1].nom}</span>
                        <span className='rmdCaptionProfession'>-{data.Recommendation[1].profession}</span>
                        </div>
                    </div>
                    
                    
                </Carousel.Item>
                <Carousel.Item className='rmdItem p-4'>
                
                    <img src={pathrmd3} className="rmdImage mx-2" alt="profil of friend" />
                    <div >
                        <p className='rmdCaptionP text-left'>{data.Recommendation[2].description}</p>
                        <div style={{float:"left"}} >
                        <span className='rmdCaptionN'>{data.Recommendation[2].nom}</span>
                        <span className='rmdCaptionProfession'>-{data.Recommendation[2].profession}</span>
                        </div>
                    </div>
                 
                </Carousel.Item> */}