import React from 'react'
import {Container, Col, Row, CardGroup } from 'react-bootstrap'

import SIngleService from './tools/Service'

const Services = ({data}) => {
    

  return (
    <>
        <a id="services"></a>
        <div className='mb-5'>
            <Container>
                <Row>
                    <h1 className='subTitle'>My <span className='subTitleUnderline'>Ser</span>vices</h1>
                    <Col>
                        <CardGroup>
                            <Row>
                                {data.My_Services && data.My_Services.length > 0 && data.My_Services.map(
                                    (service, index)=><SIngleService key={index} service={service}/>
                                ) }
                            </Row>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Services