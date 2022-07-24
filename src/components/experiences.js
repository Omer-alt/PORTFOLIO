import React from 'react'
import {Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
import Experience from './tools/Experience'
import '../styles/experiences.css'

const Experiences = ({data}) => {
  // console.log("experience data",data.My_Experiences)
  return (
    <div className='experiences pb-4'>
      <a name="experiences"></a>
      <Container >
        <Row>
          <h1 className='subTitle mt-4'>Exp<span className='subTitleUnderline'>erie</span>nces</h1>
          <Col>
            <CardGroup>
              <Row>
               
                {data.My_Experiences && data.My_Experiences.length > 0 
                  ? data.My_Experiences.map(
                  (experience, index)=><Experience key={index} experience={experience}/>
                ):null }
              </Row>
            </CardGroup>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Experiences