import React from 'react';

import slider1 from "../../assets/backgroung/slider-1.jpg"
import slider2 from "../../assets/backgroung/slider-new.jpg"
import slider4 from "../../assets/backgroung/slider-4-new (2).jpg"
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full h-[1050px] ">
          <div id="slide1" className="carousel-item relative w-full">
         
         <div className='grid md:grid-cols-2 grid-cols-1'>
         <div className=" flex items-center">
                <div className="text-black space-y-7 md:w-3/4 w-fit  md:pl-20  relative md:bottom-32">
                    <h2 className="md:text-5xl text-2xl font-bold w-3/4 mx-auto">PHOTOGRAPHY SCHOOL</h2>
                    <p className='mx-auto w-3/4 '>Since 2002 we've been training people to take beautiful photographs. By investing in our education, you'll be giving yourself the clearest, most concise and enjoyable photography training in the world.</p>
                    <div className='text-center md:text-start md:ml-14 ml-0'>
                    <button className="btn btn-info md:mr-8 mr-14 text-white">About Us</button>
                    <button className="btn btn-neutral btn-secondary ">Get A Quote</button>
                    </div>
                </div> 
              </div>
               <div className='relative md:top-20'>
                 <img src={slider1}  alt="" />
               </div>
         </div>
             
            <div className="absolute flex justify-start transform -translate-y-1/2 md:left-32 left-5 md:right-5 md:bottom-96 bottom-24">
              <a href="#slide4" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
    
    
    
    
    
          <div id="slide2" className="carousel-item relative w-full">
         
         <div className='grid md:grid-cols-2 grid-cols-1'>
         <div className=" flex items-center">
                <div className="text-black space-y-7 md:w-3/4 w-fit  md:pl-20  relative md:bottom-32">
                    <h2 className="md:text-5xl text-2xl font-bold w-3/4 mx-auto">PHOTOGRAPHY SCHOOL</h2>
                    <p className='mx-auto w-3/4 '>Since 2002 we've been training people to take beautiful photographs. By investing in our education, you'll be giving yourself the clearest, most concise and enjoyable photography training in the world.</p>
                    <div className='text-center md:text-start md:ml-14 ml-0'>
                    <button className="btn btn-info md:mr-8 mr-14 text-white">About Us</button>
                    <button className="btn btn-neutral btn-secondary ">Get A Quote</button>
                    </div>
                </div> 
              </div>
               <div className='relative md:top-10'>
                 <img src={slider2}  alt="" />
               </div>
         </div>
             
            <div className="absolute flex justify-start transform -translate-y-1/2 md:left-32 left-5 md:right-5 md:bottom-96 bottom-24">
              <a href="#slide1" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>


          
    
          <div id="slide3" className="carousel-item relative w-full">
         
         <div className='grid md:grid-cols-2 grid-cols-1'>
         <div className=" flex items-center">
                <div className="text-black space-y-7 md:w-3/4 w-fit  md:pl-20  relative md:bottom-32">
                    <h2 className="md:text-5xl text-2xl font-bold w-3/4 mx-auto">PHOTOGRAPHY SCHOOL</h2>
                    <p className='mx-auto w-3/4 '>Since 2002 we've been training people to take beautiful photographs. By investing in our education, you'll be giving yourself the clearest, most concise and enjoyable photography training in the world.</p>
                    <div className='text-center md:text-start md:ml-14 ml-0'>
                    <button className="btn btn-info md:mr-8 mr-14 text-white">About Us</button>
                    <button className="btn btn-neutral btn-secondary ">Get A Quote</button>
                    </div>
                </div> 
              </div>
               <div className='relative md:top-32'>
                 <img src={slider4}  alt="" />
               </div>
         </div>
             
            <div className="absolute flex justify-start transform -translate-y-1/2 md:left-32 left-5 md:right-5 md:bottom-96 bottom-24">
              <a href="#slide2" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>


          
        </div>
      );
};

export default Banner;