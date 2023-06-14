import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/popularInstructor')
        .then(res=> res.json())
        .then(data=> setPopularInstructor(data))
    },[])
    return (
        <div className='py-6 md:w-3/4 md:mx-auto w-full '>
            <Fade>
            <h1 className='text-center text-3xl font-bold mt-20'>Our Popular Instructors</h1>
            <p className='text-center text-xl font-semibold mt-2 '>PICSTUDIO provides one of the professional Photographer instructors</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:mx-20 mx-6 mt-24'>
                {
                    popularInstructor.map(popular=> <div key={popular._id} className="card w-80 bg-gray-200 shadow-xl">
                    <figure>
                      <img src={popular.photo} alt="instructor" className="p-3" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{popular.name}</h2>
                      <p>{popular.email}</p>
                    </div>
                  </div>)
                }
             </div>
            </Fade>
        </div>
    );
};

export default PopularInstructor;