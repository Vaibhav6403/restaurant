import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const ProgressConcepts = (props) => {
  return (
    <div className={`flex ${props.flex} w-[1100px] mt-8 rounded-lg relative`}>
  
    <img src={props.image} className='w-[800px] h-[200px] rounded-lg m-3' alt="Parallax Image" />
    <div style={{backgroundImage: 'url("props.image")'}}>

    </div>
 
  
  <div>
    <h1 className='text-sky-500 text-3xl m-3'>
      {props.text}
    </h1>
    <p className='m-3 text-xl'> 
      {props.desc}
    </p>
  </div>
</div>
  )
}

export default ProgressConcepts
