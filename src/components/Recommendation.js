import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import '../styles/Recommendation.css'
import RecommendItem from './tools/RecommendItem'

const Recommendation = ({data}) => {

  return (
    <div className='recommendation'>
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col className="d-flex justify-content-center" sm={12} md={10} >
                    <Carousel controls={false} className='py-5' slide={false}>
                        {data.Recommendation && data.Recommendation.length > 0 && data.Recommendation.map(
                            (recommend, index)=><RecommendItem recommend={recommend} key={index}   />
                        )}
                    </Carousel>                    
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Recommendation