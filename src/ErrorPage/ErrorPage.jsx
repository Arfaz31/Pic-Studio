import React from 'react';
import error from "../assets/errrorpage/error.jpg"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
      <div className="w-1/2 mx-auto ">
        <img src={error} alt=""/>
      </div>
      <div className="w-max mx-auto mb-16">
      <Link to="/">
      <button className="btn btn-info text-white">Back to Homepage</button>
      </Link>
      </div>
    </div>
    );
};

export default ErrorPage;