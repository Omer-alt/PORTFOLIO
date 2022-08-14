import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../styles/Recommendation.css'
//not use this components
const RecommendItem = ({recommend}) => {
  console.log("my path", recommend)
  const pathrmd = require("../../assets/"+recommend.image)
  

  return (
    <Carousel.Item className='rmdItem p-4'>
   
      <img src={pathrmd} className="rmdImage mx-2" alt="profil of friend" />
      <div >
        <p className='rmdCaptionP text-left'>{recommend.description}</p>
        <div style={{float:"left"}} >
          <span className='rmdCaptionN'>{recommend.nom}</span>
          <span className='rmdCaptionProfession'>-{recommend.profession}</span>
        </div>
      </div>
       
    </Carousel.Item>
        
  )
}

export default RecommendItem