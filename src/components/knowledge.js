import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/knoledge.css'
import Education from './tools/Education'

const Knowledges = ({data}) => {
    console.log(data.Knowledge,"knowledge")

  return (
    <div className='knowledge'>
        <Container>
            <Row>
                <Col>
                    <h1 className='subTitle mt-4'>Educat<span className='subTitleUnderline'>ion</span> & Skills</h1>
                    <Row>
                        <Col md={4}>
                            <Card className='cardEducation text-sm-center text-md-left' body>
                                {   data.Knowledge.Education && 
                                    data.Knowledge.Education.length > 0 
                                    ? data.Knowledge.Education.map((education, index) => <Education education={education} key={index}/>)
                                    :null
                                }
                            </Card>
                        </Col>
                        <Col md={8}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Knowledges