import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/image.jpg'
import foodvideo from '../assets/foodvideo.mp4'
import ProgressConcepts from '../components/ProgressConcepts'
import Testimonials from '../components/Testimonials'
import AOS from 'aos';

import "aos/dist/aos.css";
import Footer from '../components/Footer'


const HomePage = () => {

    

    const testimonials = [
        {text:"Working with [Your Company Name] has been an absolute pleasure. Their team is professional, knowledgeable, and dedicated to delivering results. I highly recommend their services!",
        author:"jon doe"},
        {text:"I can't thank [Your Company Name] enough for the amazing work they've done for us. Their attention to detail and commitment to customer satisfaction is unmatched. I wouldn't hesitate to recommend them to anyone.",
        author:"Emily Johnson"},
        {text:"Choosing [Your Company Name] was one of the best decisions we've made for our business. Their expertise and creativity have helped us achieve our goals and exceed our expectations. We look forward to continuing our partnership with them.",
        author:"David Williams"

        }

        
    ]
    const imagearray =[{
        image:"https://erestaurantconsulting.ca/wp-content/uploads/2022/08/menu-development.jpg",
        text:"Koko - The Main",
        desc:"Coming Soon Toronto, ON",
        flex:"flex-row"
    },{
        image:"https://media.istockphoto.com/id/1463050489/photo/online-application-form-for-modish-registration.jpg?s=1024x1024&w=is&k=20&c=l4VsFtkR_VNyB2Z2fwYs3p962J5HNIhz8b-cI4sYg54=",
        text:"Koko - The Main",
        desc:"Coming Soon Toronto, ON",
        flex:"flex-row-reverse"
    },{
        image:"https://media.istockphoto.com/id/1463050489/photo/online-application-form-for-modish-registration.jpg?s=1024x1024&w=is&k=20&c=l4VsFtkR_VNyB2Z2fwYs3p962J5HNIhz8b-cI4sYg54=",
        text:"Koko - The Main",
        desc:"Coming Soon Toronto, ON",
        flex:"flex-row"
    },{
        image:"https://media.istockphoto.com/id/1463050489/photo/online-application-form-for-modish-registration.jpg?s=1024x1024&w=is&k=20&c=l4VsFtkR_VNyB2Z2fwYs3p962J5HNIhz8b-cI4sYg54=",
        text:"Koko - The Main",
        desc:"Coming Soon Toronto, ON",
        flex:"flex-row-reverse"
    },{
        image:"https://media.istockphoto.com/id/1463050489/photo/online-application-form-for-modish-registration.jpg?s=1024x1024&w=is&k=20&c=l4VsFtkR_VNyB2Z2fwYs3p962J5HNIhz8b-cI4sYg54=",
        text:"Koko - The Main",
        desc:"Coming Soon Toronto, ON",
        flex:"flex-row"
    }] 

 
    useEffect(() => {
      
      AOS.init({
        once: false,
        
        duration: 1000,
       
      });
    }, []);

   



    

  return (
    <> <Navbar/>
  <div className='w-full h-full flex flex-col items-center relative'>
    
    <div className='mt-24 w-full h-[800px] relative'>
        <div className='bg-black clip-circle'>
            <video
            src={foodvideo}
            controls={false} autoPlay loop muted
            className='w-full h-[900px] opacity-50'
            ></video>;
            </div>
        
        <div className='absolute top-[330px] left-[520px] w-[550px] flex flex-col items-center text-center'>
        
           <div  data-aos='slide-left'>
           <h1 className='text-5xl text-sky-500 '>
            Restaurant Solutions For Business Leaders
            </h1></div> 
            <div className='bg-white w-[100px] h-[2px] mt-8  left-60'>
             </div>
             <div className='text-white mt-4 mb-4'>
                Menu Development | Concept Development | Digital Development
             </div>
             <Button text="Book Consultation" padding="2px" margin="1" />
            
        </div>


        

    </div>
   
    <div className=' flex items-center justify-center flex-col w-[550px] mt-1'>
        <div className='w-[400px] text-center'>
        <h1 className='text-4xl'>
        Improving Restaurants From Toronto To Vancouver
        </h1>
        </div>
        <div className='bg-sky-500   w-[270px] h-[2px] mt-3'>
        </div>
        <div className='flex'>
        <TypeAnimation sequence={['Experience',2000,'Passion',2000]}
        wrapper="span"
        speed={50}
        cursor={false}
        
        className='inline-block text-sky-500 text-2xl mt-4'
        repeat={Infinity}
        />
        <p className='mt-4 text-2xl'>= Results</p>
        </div>
        <p className='mt-5 font-serif ml-7 mb-4' >
        Making money in the restaurant business requires a deep understanding of restaurant operations,  customer expectations and the industry as a whole. At ERC, we make it our mission to increase restaurant profit margins, drawing on years of expertise and a dedication to delivering for our clients.
        </p>
        <Button text="About Us" padding="8px"/>
    </div>

    <div className='relative mt-12 w-full h-[500px]'>
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width:"100%",minHeight:"500px"}} 
        className='relative'> 
        {/* <img src={image} className='w-full z-2 bg-auto opacity-50 h-auto ' alt="Your image" /> */}
        
        <div className='flex w-[500px]'>
        <div className='absolute top-40 left-40 text-white p-4 text-5xl w-[800px] leading-2 z-20 font-semibold leading-2 animate' >
        ERC OFFERS A <span className='text-sky-500 text-5xl '>FREE 30-MINUTE</span> PHONE CONSULTATION TO ANY FOOD SERVICE PROFESSIONAL
        </div>
        <div>
        </div>
            <div  className='absolute top-[180px] right-20 flex flex-col gap-3'>
            <label className='text-white text-lg'>name:</label>
          <input type='text' className='opacity-50 border-white'></input> 
         <div className='flex gap-3'>
            <label className='text-white text-lg'>email:</label>
          <input type='text' className='opacity-50'></input> 
          <label className='text-white text-lg'>phone:</label>
          <input type='text' className='opacity-50'></input> 
          </div>
          <label className='text-white text-lg'>comments:</label>
          <textarea className='opacity-50 border-transparent'></textarea>

          </div>   
        </div>
        </div>
    </div>
   

   {/* online ordering section */}
    <div className='flex flex-col items-center justify-center mt-12 w-[800px]'>
        <h1 className='text-5xl'>Online Ordering</h1>
        <p className='text-2xl text-sky-500 text-center mt-3'>Did You Know 82% Of Guests Order Food Online Directly From A Restaurant Website?</p>
        <p className='text-lg mt-5'>
        Make your Restaurant an Online Digital, Delivery & Takeout Powerhouse in 3 Steps
        </p>
        <div className='flex mt-6 gap-8 justify-evenly w-[700px] relative'>
            <div className='flex flex-col gap-4' >
                <button className='text-sky-500 text-2xl rounded-lg border-2 border-sky-500 p-4 ' >
                    <p data-aos="fade-right">Schedule a Call</p>
                </button>
                <button className='text-sky-500 text-2xl rounded-lg border-2 border-sky-500 p-4'>
                <p className='animate'>Get Your Plan</p>
                </button>
                <button className='text-sky-500 text-2xl rounded-lg border-2 border-sky-500 p-4' >
                <p className='animate' >Win Online</p>
                </button>
            </div>
            <div className='flex flex-col w-[300px] gap-3'>
                <p className='text-lg ml-[150px]' data-aos="slide-right">
                Less phone ringing, more cooking
                </p>
                <p className='text-lg'>
                Mobile friendly, engaging online store directly connected to your kitchen printer
                </p>
                <p className='text-lg'>
                Reduce the time spent on the phone and decreases order mistakes
                </p>
                <p className='text-lg'>
                Your Restaurant, Your Brand, Your Online Store
                </p>

            </div>
        </div>


    </div>


    

    {/* concepts in progress section */}
   <div className=''>
    <h1 className='text-5xl mt-12'>
        Concepts in Progress
    </h1>
        {imagearray.map((image)=>{
            return(
                <>
                <ProgressConcepts image={image.image} text={image.text} desc={image.desc} flex={image.flex}/>
                </>
            )
        })}
        </div>


        



        {/* testimonial section */}

       <div className="text-center bg-neutral-100 w-full mx-auto mt-12">
       <h1 className="text-4xl font-bold mt-6 sans-serif">What Our Clients Say About Us</h1>

    
        
        <Testimonials reviews={testimonials}/>

       </div>

       {/* contact us section */}

       <div className='bg-sky-500 w-full flex flex-col items-center pt-10 pb-10 mt-12'>
        <h1 className='text-5xl text-white'>
                Contact Us
            </h1>
            <div className='flex mt-8 space-x-60 justify-evenly '>
            <div className='flex flex-col mt-8 space-y-2'>
                <label className='text-white'>Name:</label>
                <input type='text' className='px-6'>
                </input>
                <label className='text-white'>Your email</label>
                <input type='text'>
                </input>
                <label className='text-white'>Your phone</label>
                <input type='text'>
                </input>
                <label className='text-white'>Subject</label>
                <input type='text'>
                </input>
                <label className='text-white'>
                Your message (optional)
                </label>
                <textarea rows={6}></textarea>
                <button className='w-[80px] border-2 mt-1 bg-black text-white py-1 border-none hover:bg-sky-500 hover:border-2 border-black'>
                    Submit
                </button>
            </div>
            <div className='text-xl text-white w-[200px] mt-8 '>
            Making money in the restaurant business requires a deep understanding of restaurant operations, customer expectations and the industry as a whole.

            </div>
            </div>
        </div>
   
  

  

        <Footer/>
  </div>
  
  </>
  )
}

export default HomePage
