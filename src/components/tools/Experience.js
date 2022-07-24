import React from 'react'
import { Card } from 'react-bootstrap'
import '../../styles/experiences.css'

const Experience = ({experience}) => {
  return (
    <div className='col-12 col-sm-6 col-md-6 mt-3'>
      <Card className='cardExperience' >
        <Card.Body >
            <Card.Title className='cardExperienceTitle pt-2'>
              {experience.title}
              <p className='cardPeriod pt-2'>{experience.period}</p>
            </Card.Title>
          <hr/>
          <Card.Text className='cardDescription'>
            {experience.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Experience