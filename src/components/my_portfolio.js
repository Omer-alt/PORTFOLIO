import React from 'react'
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap'
import '../styles/my_portfolio.css'
import CreationList from './tools/CreationList'

const My_portfolio = ({data}) => {


  return (
    <div>
        <a id="porfolio"></a>
        <Container>
            <Row>
                <Col>
                    <h1 className='subTitle mt-4'>My p<span className='subTitleUnderline'>ort</span>folio</h1>
                    <Navbar className='filterNav justify-content-center' variant='dark'>                    
                        <Nav >
                            <Nav.Link className="navbar-link" href="#home">All</Nav.Link>
                            <Nav.Link className="navbar-link" href="#features">Branding</Nav.Link>
                            <Nav.Link className="navbar-link" href="#pricing"> photography</Nav.Link>
                            <Nav.Link className="navbar-link" href="#fashion">Fashion</Nav.Link>
                            <Nav.Link className="navbar-link" href="#product">product</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Row>
                        
                        {data.My_portfolio && data.My_portfolio.length > 0 && data.My_portfolio.map(
                            (creationItem, index)=><CreationList creationItem={creationItem} key={index}   />
                        )}
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default My_portfolio