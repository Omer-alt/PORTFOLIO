import React from 'react'
import { ProgressBar, ListGroup } from 'react-bootstrap'
import '../../styles/knoledge.css'

const Skills = ({skill}) => {

  console.log("skill",skill.percentage)

  return (
  <ListGroup.Item className='skill '>
    <div className='skillPercentage'>{skill.percentage}%</div>
    <div className='skillBlock'>
      <span className='skillName'>{skill.technoloogy}</span>
      <ProgressBar >
        <ProgressBar striped variant="success" now={skill.percentage} key={1} />
        <ProgressBar variant="dark" now={(100-skill.percentage)} key={2} />
      </ProgressBar>
    </div>
    </ListGroup.Item>
  )
}

export default Skills