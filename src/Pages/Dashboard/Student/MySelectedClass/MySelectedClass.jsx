import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';


const MySelectedClass = () => {
  const{user} = useContext(AuthContext)
    const [mySelectedClasses, setMySelectedClasses] = useState([])
    console.log(mySelectedClasses)

    useEffect(()=>{
        fetch('https://pic-studio-server-arfaz31.vercel.app/mySelectedAllClasses')
        .then(res=> res.json())
        .then(data=> setMySelectedClasses(data))
    },[])



    const handleDelete = (_id) =>{
      console.log(_id)

      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
           fetch(`https://pic-studio-server-arfaz31.vercel.app/mySelectedAllClasses/${_id}`,{
               method: "DELETE"
             
           })
           .then(res => res.json())
           .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                  Swal.fire(
                      'Deleted!',
                      'Your class has been deleted.',
                      'success'
                    )
                    const remaining = mySelectedClasses.filter(myClass => myClass._id !== _id)
                    setMySelectedClasses(remaining)
              }
           })
          }
        })
  }








    return (
       <div>
         <div className='mt-20 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    mySelectedClasses.map(myClass=>  <div key={myClass._id} className="card w-80 bg-gray-200 rounded-none shadow-lg">
                    <figure>
                      <img
                        src={myClass.image}
                        alt="classImage"
                        className="p-2"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{myClass.className}</h2>
                      <p>{myClass.instructorName}</p>
                      <p>Available: {myClass.availableSeat}</p>
                      <p>Price: ${myClass.price}</p>
                      <div className="card-actions">
                       <Link state={myClass} to="/dashboard/payment"><button className="btn btn-primary btn-xs">Enrol Now</button></Link>
                        <button onClick={()=> handleDelete(myClass._id)}  className="btn btn-primary btn-xs">Delete</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
       </div>
    );
};

export default MySelectedClass;