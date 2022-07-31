import React from 'react'
import { WiDirectionUp } from "react-icons/wi";
import "../../styles/scrollToTop.css"

const ScrollToTop = () => {
  return (
    <a href='#scrollTop' style={{color:"#FFF"}}>
        <div className='GoAtStarting'>
            <WiDirectionUp style={{height:"46px", width:"44px", marginInline:"3px"}}/>
        </div>
    </a>
  )
}

export default ScrollToTop