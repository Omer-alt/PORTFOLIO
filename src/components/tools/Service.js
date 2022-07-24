import React from 'react'
import {Card} from 'react-bootstrap'
import '../../styles/service.css'

const SIngleService = ({service}) => {
    // pour importer l'image de la carte concernee
  const chemin = require("../../assets/"+service.image)

  return (
    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-3'>
      <Card className='cardService'>
        <Card.Img className='cardServiceImg ' variant="bottom" src={chemin} />
        <Card.Body className='cardServiceBody'>
          <Card.Title className='cardServiceTitle'>{service.title}</Card.Title>
          <Card.Text className='cardServiceText'>
            {service.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SIngleService