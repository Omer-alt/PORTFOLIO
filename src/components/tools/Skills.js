import React from 'react'
import { ProgressBar, ListGroup } from 'react-bootstrap'
import '../../styles/knoledge.css'

const Skills = ({skill}) => {

  console.log("skill",skill.percentage)

  return (
  <div className='d-flex align-items-center '>
    <div className='skillPercentage'>{skill.percentage}%</div>
    <ListGroup.Item className='skill w-100' style={{backgroundColor:"#000"}} >
      <div className='skillBlock text-start'>
        <span className='skillName'>{skill.technoloogy}</span>
        <ProgressBar >
          <ProgressBar striped variant="success" now={skill.percentage} key={1} />
          <ProgressBar variant="dark" now={(100-skill.percentage)} key={2} />
        </ProgressBar>
      </div>
    </ListGroup.Item>
  </div>
  )
  
}

export default Skills