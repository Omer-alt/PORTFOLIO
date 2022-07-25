// import { } from 'bootstrap'
import React from 'react'
import { Card  } from 'react-bootstrap'
import '../../styles/knoledge.css'

const Education = ({education}) => {
  return (
    <div className='mx-5 my-4 cardEducationElement'>
      <Card.Subtitle className='cardBodyPeriod'>{education.period}</Card.Subtitle >
      <Card.Title className='cardBodyTitle'>{education.title}</Card.Title>
      <Card.Text className='cardBodyText'>{education.description}</Card.Text>
      <hr/>
    </div>
  )
}

export default Education