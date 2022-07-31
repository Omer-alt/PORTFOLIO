import React,{useState,useEffect} from 'react'

const CreationList = ({creationItem}) => {
    // const [step, setStep] = useState(false)
    const path = require("../../assets/"+creationItem.image)

    // useEffect(
    //     ()=>setStep(!step)&&console.log(step,"state")
    // ,[])

  return (
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
            src={path}
            class="w-100  mb-4"
            alt="Creation item"
        /> 
    </div>
  )
}

export default CreationList