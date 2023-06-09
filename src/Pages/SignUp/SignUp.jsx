import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from "lottie-react";
import signUp from "../../assets/login/118046-lf20-oahmox5rjson.json";
import { Link } from 'react-router-dom';



const SignUp = () => {
    const { createUser} = useContext(AuthContext);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then((result) => {
          const signUpUser = result.user;
          console.log(signUpUser);
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
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-1">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-1">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password name is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one Uppercase, one Lower case,
                    one Special character
                  </p>
                )}
              </div>
                 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                 </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-1">
                    Photo URL is required
                  </span>
                )}
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