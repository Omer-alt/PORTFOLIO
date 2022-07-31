import React from 'react'
import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap'
import '../styles/Contact.css'
import ContactItem from './tools/ContactItem'
import MapLeaflet from './tools/map'

const Contact = ({data}) => {
  return (
    <Container>
        <Row>
            <Col>
                <MapLeaflet/>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
                <h1 className='subTitle mt-4'>
                    <a name="contact"></a>
                    <span  className='subTitleContactSpan'>
                        <span className='subTitleUnderline'>Con</span>tact us
                    </span>
                    <span className='subTitleContactSpan'>
                        Let's Discuss Your project
                    </span>
                </h1>
                <div>
                    {data.Contact && data.Contact.length > 0 && data.Contact.map(
                            (contact, index)=><ContactItem contact={contact} key={index}   />
                        )}
                        
                </div>
            </Col>
            <Col sm={12} md={6}  className='mt-5'>
                <Form>
                    <InputGroup className="mb-3 mt-md-5">
                        <Form.Control
                            className='formInput'
                            placeholder="Name"
                            aria-label="Sender's username"
                            aria-describedby="basic-addon2"
                        />
                        <Form.Control
                            className='formInput ms-3'
                            placeholder="phone"
                            aria-label="Sender's username"
                            aria-describedby="basic-addon2"
                        />   
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            className='formInput'
                            placeholder="E-mail"
                            type="email"
                            aria-label="Sender's email"
                        />
                        <Form.Control
                            className='formInput ms-3'
                            placeholder="subjet"
                            aria-label="Sender's subjet"
                        />   
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            as="textarea"
                            className='formTextArea'
                            placeholder="Message*"
                            aria-label="Sender's username"
                            aria-describedby="basic-addon2"
                        />   
                    </InputGroup>
                    <Button className='sendMessage mt-lg-2 mb-5 '  variant="outline-success" size='lg'>Send Message</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact