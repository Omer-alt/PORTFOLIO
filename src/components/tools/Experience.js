import React,{useEffect} from 'react'
import { Card } from 'react-bootstrap'
import  AOS  from 'aos';
import "aos/dist/aos.css";
import '../../styles/experiences.css'

const Experience = ({experience}) => {

    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])

  return (
    <div className='col-12 col-sm-6 col-md-6 mt-3'>
      <Card className='cardExperience' data-aos="flip-up" >
        <Card.Body >
            <Card.Title className='cardExperienceTitle pt-2'>
              {experience.title}
              <p className='cardPeriod pt-2'>{experience.period}</p>
            </Card.Title>
          <hr className='ms-5'/>
            <Card.Text className='cardDescription'>
                {experience.description}
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Experience