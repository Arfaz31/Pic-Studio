import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyEnrolledClass = () => {
    const enrolledClasses = useLoaderData()


    return (
        <div>
             
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {
                enrolledClasses.map(enrolledClass=><div key={enrolledClass._id} className="card w-96 bg-gray-200 shadow-xl">
                <figure>
                  <img
                    src={enrolledClass.image}
                    alt="weight loss"
                    className="p-3"
                  />
                </figure>
                <div className="ml-5">
                  <h2 className="text-2xl font-bold">{enrolledClass.className}</h2>
                  <p className="text-xl font-semibold">{enrolledClass.instructorName}</p>
                   <div className="flex space-x-3">
                   <p className="text-base font-semibold text-gray-500">Price: ${enrolledClass.price}</p>
                   <p className="text-base font-semibold text-gray-500">Available seat: {enrolledClass.availableSeat}</p>
                   </div>
                  <div className="card-actions">
                    <button className="btn btn-primary mb-8 mt-2">Update</button>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default MyEnrolledClass;