import React,{useEffect, useState} from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import '../styles/my_portfolio.css';
import CreationList from './tools/CreationList';

const My_portfolio = ({data}) => {
    console.log(data.My_portfolio, "porfolio datas")
    
    const [item, setItem ] = useState("All")
    const [stateIsotrope, updateStateIsotrope] = useState(data.My_portfolio)
    
    const setValueItem =(value)=>{
        setItem(value)
    }
    const changeStateIsotrope = (value)=>{
        if (value === "All") {
            updateStateIsotrope(data.My_portfolio)
        } else {
            let state = data.My_portfolio.filter((f)=>f.filter[0].includes(value))
            updateStateIsotrope(state)
        }
    }
    useEffect(()=>{
        changeStateIsotrope(item)
    },[item])
            
  return (
    <div>
        <a id="porfolio"></a>
        <Container>
            <Row>
                <Col>
                    <h1 className='subTitle mt-4'>My p<span className='subTitleUnderline'>ort</span>folio</h1>
                    <Navbar className='filterNav justify-content-center' variant='dark'>                    
                        <Nav >
                            <Nav.Link className="navbar-link" href="#" onClick={()=>setItem("All")} >All</Nav.Link>
                            <Nav.Link className="navbar-link" href="#" onClick={()=>setItem("Branding")}>Branding</Nav.Link>
                            <Nav.Link className="navbar-link" href="#" onClick={()=>setItem("Photography")}> photography</Nav.Link>
                            <Nav.Link className="navbar-link" href="#" onClick={()=>setItem("Fashion")}>Fashion</Nav.Link>
                            <Nav.Link className="navbar-link" href="#" onClick={()=>setItem("Product")}>product</Nav.Link>    
                        </Nav>
                    </Navbar>
                    <Row>

                        {data.My_portfolio && data.My_portfolio.length > 0 && stateIsotrope.map(
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
