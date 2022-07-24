import React,{useState, useEffect} from 'react'
import {Container, Col, Row, CardGroup } from 'react-bootstrap'
import SIngleService from './tools/Service'
// import {services} from "../assets/data.json"

const Services = () => {
    // const AvailableSevice = JSON.parse(services)
    const [data, setData] = useState({})

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <Container >
            <Row>
            <h1 className='subTitle'>My <span className='subTitleUnderline'>Ser</span>vices</h1>
            <Col>
                <CardGroup>
                    {data.My_Services && data.My_Services.length > 0 && data.My_Services.map(
                        (service, index)=><SIngleService key={index} service={service}/>
                    ) }
                </CardGroup>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services