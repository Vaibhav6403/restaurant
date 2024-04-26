import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import {FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
   
    
    <div className='text-center mt-7'>
      <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
      
    </div>


    <div className='text-violet-400 mx-2 mt-5'>
      <FaQuoteLeft/>
    </div>

    <div className='text-center mt-4 text-slate-500'>
      {review.text}
    </div>

    <div  className='text-violet-400 ml-[800px] mt-5'>
      <FaQuoteRight/>
    </div>
  </div>
  )
}

export default Card
