import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddClass = () => {
    const{user}= useContext(AuthContext)
    const {register, handleSubmit,  formState: { errors }, reset} = useForm();
    
      const onSubmit = (data) =>{
        console.log(data)
        const instructorClass ={
            instructorName: user.displayName,
            email:user.email,
            className: data.class,
            photoUrl:data.photo,
            availableSeat: parseFloat (data.seat),
            price: parseFloat(data.price),
            status:'pending'
        }
        fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(instructorClass)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Class Added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
          }
        })
      }
  return (
    <div className="w-full h-full">
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full mx-auto mr-10  shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <div className="grid grid-cols-2 gap-5">
             <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("name", { disabled: false})}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bordered"
                readOnly 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered"
                readOnly 
              />
            </div>
             </div>
               <div  className="grid grid-cols-2 gap-5">
               <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
            </div>   
            <div className="form-control">
              <label className="label">
                <span className="label-text">CLass Name</span>
              </label>
              <input
                type="text"
                {...register("class", { required: true })}
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
            </div>
               </div>
             <div className="grid grid-cols-2 gap-5">
             <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                type= "text"
                {...register("seat")}
                placeholder="Available seats"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
             </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-info"
                type="submit"
                value="Add Class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddClass;