import React, { useContext, useState } from 'react';
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from "lottie-react";
import signUp from "../../assets/login/118046-lf20-oahmox5rjson.json";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";


const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCPasswordShown] = useState(false);
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);

    const validationSchema = Yup.object().shape({
        name:  Yup.string() 
         .required('Name is required'),
         email: Yup.string('Email is required')
         .required(),
         photoURL: Yup.string('PhotoURL is required')
         .required(),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,'Password must contain at least one lowercase letter, one uppercase letter,  one digit and one special character'
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords should match!')
            
    });
       const formOptions = { resolver: yupResolver(validationSchema) };

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm(formOptions);
  
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then((result) => {
          const signUpUser = result.user;
          console.log(signUpUser);
          updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          logOut()
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        });
      };

      

    return (
        <>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse my-16 md:ml-24 ml-0">
          <div className="text-center lg:text-left">
          <div className="w-3/4 mx-auto md:mt-0 mt-10">
            <Lottie animationData={signUp} loop={true} />
          </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="name"
                  className={`input input-bordered form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback text-red-500 pt-1 ">{errors.name?.message}</div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className={`input input-bordered form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                     <div className="invalid-feedback text-red-500 pt-1 ">{errors.email?.message}</div>
              </div>

             <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                 type={passwordShown ? 'text' : 'password'}
                {...register("password")}
                placeholder="Enter your password"
                className={`input input-bordered form-control ${errors.password ? 'is-invalid' : ''}`}
                
              />
              
               <FaEye onClick={()=> setPasswordShown(!passwordShown)} className="md:-mt-8 -mt-8  md:ml-72 ml-60"></FaEye>
               <div className="invalid-feedback text-red-500 pt-5">{errors.password?.message}</div>

            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type={cPasswordShown ? 'text' : 'password'}
                {...register("confirmPassword")}
                placeholder="Enter your password"
                className={`input input-bordered form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
               
               <FaEye onClick={()=> setCPasswordShown(!cPasswordShown)} className="md:-mt-8 -mt-8  md:ml-72 ml-60"></FaEye>
               <div className="invalid-feedback text-red-500 pt-5">{errors.confirmPassword?.message}</div>


            </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL")}
                  placeholder="photo URL"
                  className={`input input-bordered form-control ${errors.photoURL ? 'is-invalid' : ''}`}
                />
                  <div className="invalid-feedback text-red-500 pt-1">{errors.photoURL?.message}</div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="my-4 text-center">
                    Already Logged in?{" "}
                    <Link className="text-indigo-700 font-bold" to="/login">
                      visit Login
                    </Link>
                  </p>
            </form>
          </div>
        </div>
      </div>   
        </>
    );
};

export default SignUp;