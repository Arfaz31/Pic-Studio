import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
    const [feedbackClass, setFeedbackClass]= useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('https://pic-studio-server-arfaz31.vercel.app/allclasses')
        .then(res=> res.json())
        .then(data=> setFeedbackClass(data))
    },[])

    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const onSubmit = data => {
    const adminFeedback ={feedback:data.feedback}
    console.log(data)
    fetch(`https://pic-studio-server-arfaz31.vercel.app/feedback/${feedbackClass[0]._id}`, {
        method:'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(adminFeedback)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        reset()
        navigate('/dashboard/manageClasses')
    })
};


    return (
        <div > 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <input type="text" {...register("feedback")} placeholder="Enter Feedback" className="input input-bordered w-96" />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-info" type="submit" value='Feedback' />
        </div>
      </form>
        </div>
    );
};

export default Feedback;