import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#00b074", height:"50px"}}>
        <Container>
            <Row>
                <Col>
                    <span className='d-flex justify-content-center pt-3'>Copyright &#169; 2022. All Rights Reserved.</span>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer