import React, { useEffect, useState } from 'react'
import bird_2 from "../assets/bird_2.jpg"
import DropDown from './DropDown';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

  
  const handleScroll = () => {
    
    if (window.pageYOffset > 100) {
      
      setScrolled(true);
    } else {
      
      setScrolled(false);
    }
  };

 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`fixed top-0 w-full  z-50 flex justify-evenly items-center p-3  bg-white  ${scrolled ? 'h-[20px]' : 'h-[90px]'}`}>
      <div>
        <img src={bird_2} alt='image' className='h-auto w-[100px] max-h-[90px]'></img>
      </div>

      <ul className='flex gap-7'>
        <li className='text-lg text-serif'>New Development/Start Ups</li>
        <li className='text-lg text-serif'>Menu Development & Branding</li>
        <li className='text-lg text-serif'>Digital Development</li>
        <li className='text-lg text-serif'>Restaurant Operations</li>

      </ul>
    </div>
  )
}

export default Navbar
