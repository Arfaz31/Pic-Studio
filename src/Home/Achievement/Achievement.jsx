import React from 'react';
import logo from "../../assets/logo/logo-1.png"
import achieveOne from "../../assets/achievement/a-1.png"
import achieveTwo from "../../assets/achievement/a-2.png"
import achieveThree from "../../assets/achievement/a-3.png"
import { Flip, Hinge } from 'react-awesome-reveal';
const Achievement = () => {
    return (
        <div className='my-24'>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-4xl pr-3'>ACHIEVEMENTS</h2>
                <img src={logo} alt="" />
            </div>
            <p className='text-center text-xl font-semibold mt-4 mb-12'>"Photography is an art of observation. It's about finding something interesting in an ordinary place." </p>
            

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-0 md:py-12 py-0'>
              <Flip>
              <div className='flex flex-col space-y-3 border border-cyan-300 w-1/2 mx-auto p-10 text-center 
                transform hover:scale-125 transition duration-500 ease-in-out hover:bg-gray-600 group 
                rounded-lg hover:border-none
                '>
                    <img src={achieveOne} className='w-3/4 mx-auto' alt="" />
                    <h4 className='font-bold text-3xl text-black group-hover:text-white  '>1000+</h4>
                    <p className='font-bold text-xl text-black group-hover:text-white '>PHOTO SESSION</p>
                </div>
              </Flip>

                <Flip>
                <div className='flex flex-col space-y-3 border border-cyan-300 w-1/2 mx-auto p-10 text-center
                 transform hover:scale-125 transition duration-500 ease-in-out hover:bg-red-500 group 
                 rounded-lg hover:border-none
                '>
                    <img src={achieveTwo} className='w-3/4 mx-auto' alt="" />
                    <h4 className='font-bold text-3xl text-black group-hover:text-white '>9000+</h4>
                    <p className='font-bold text-xl text-black group-hover:text-white '>HAPPY CUSTOMERS</p>
                </div>
                </Flip>
              
              <Flip>
              <div className='flex flex-col space-y-3 border  border-cyan-300 w-1/2 mx-auto p-10 text-center
                 transform hover:scale-125 transition duration-500 ease-in-out hover:bg-purple-500 group 
                 rounded-lg hover:border-none
                '>
                    <img src={achieveThree} className='w-3/4 mx-auto' alt="" />
                    <h4 className='font-bold text-3xl text-black group-hover:text-white'>1000+</h4>
                    <p className='font-bold text-xl text-center text-black group-hover:text-white'>ARCHIVE PICTURE</p>
                 
                </div>
              </Flip>
            </div>
        </div>
    );
};

export default Achievement;