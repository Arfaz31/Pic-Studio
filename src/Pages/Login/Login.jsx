import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/login/93385-login.json";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
      reset();
    });
  
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <div className="w-3/4 mx-auto md:mt-0 mt-10">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                {...register("password", { required: true })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <SocialLogin/>
            <p className="my-4 text-center">
                    New to PICSTUDIO?{" "}
                    <Link className="text-indigo-700 font-bold" to="/signUp">
                      Sign Up
                    </Link>
                  </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
