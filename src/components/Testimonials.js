import React, { useState } from 'react'
import Card from './Card';
import {FiChevronRight} from 'react-icons/fi'
import {FiChevronLeft} from 'react-icons/fi'

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }
  return (
    <div className='flex justify-center h-auto p-4 '>
    <div className='w-[90vw] md:w-[900px] bg-neutral-100 flex flex-col justify-center items-center
    mt-2 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <Card review = {reviews[index]}></Card>

        <div className='flex text-3xl mt-10 gap-3  font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronRight/>
        </button>
      </div>

      </div>
      </div>
  )
}

export default Testimonials
