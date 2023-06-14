import React, { useEffect, useState } from 'react';

const MyClass = () => {
    const [allClass, setAllClass]= useState([])
    console.log(allClass)
    const [totalEnroll, setTotalEnroll] = useState(0)

    useEffect(()=>{
        fetch('https://pic-studio-server-arfaz31.vercel.app/allClasses')
        .then(res=> res.json())
        .then(data=> setAllClass(data))
    },[])


    useEffect(()=>{
      fetch('https://pic-studio-server-arfaz31.vercel.app/payment/count')
      .then((res) => res.json())
      .then(data=>{ 
        const count = data && data.length > 0 ? data[0].count : 0;
        setTotalEnroll(count);
       })
    },[])



  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {
            allClass.map(cl=> <div key={cl._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cl.photoUrl}
                alt="photography-class"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cl.className}</h2>
              <p>{cl.instructorName}</p>
              <p>{cl.email}</p>
              <p>Price: ${cl.price}</p>
              <p>Available seat: {cl.availableSeat}</p>
              <p>Status: {cl.status}</p>
              <p className="text-base font-semibold text-gray-500">Total Enroll:{totalEnroll? 0 : totalEnroll} </p>
              <p className="text-base font-semibold text-gray-500">Feedback:{cl?.feedback} </p>
              <div className="card-actions">
                <button className="btn btn-info">Update</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyClass;