import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    
    const [manageClass, setManageClass]= useState([])
 
    useEffect(()=>{
        fetch('http://localhost:5000/allclasses')
        .then(res=> res.json())
        .then(data=> setManageClass(data))
    },[manageClass])

   //status change
   const handleApproved = id =>{
    fetch(`http://localhost:5000/classes/approve/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Status updated',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    })
   }
   const handleDenied = id =>{
    fetch(`http://localhost:5000/classes/deny/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Status updated',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    })
   }


   

    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mt-10">
        {
            manageClass.map(cl=> <div key={cl._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cl.photoUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cl.className}</h2>
              <p>{cl.instructorName}</p>
              <p>{cl.email}</p>
              <p>Price: ${cl.price}</p>
              <p>Available seat: {cl.availableSeat}</p>
              <p>Status: {cl.status === 'approve' ? 'Approved' : cl.status === 'deny' ? 'Denied' : 'Pending'}</p>
              <div className="card-actions">
                <button disabled={cl.status === "approve" || cl.status === "deny"} onClick={()=> handleApproved(cl._id)} className="btn btn-info"> Approve</button>
                <button  disabled={cl.status === "approve" || cl.status === "deny"} onClick={()=>  handleDenied (cl._id)} className="btn btn-info">Deny</button>
        <Link to='/dashboard/feedback'>  <button  className="btn btn-info">send feedback</button></Link>
                
              </div>
            </div>
          </div>)
        }
      </div>
        </div>
    );
};

export default ManageClasses;










