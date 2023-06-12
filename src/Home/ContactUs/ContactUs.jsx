import React from "react";
import "./ContactUs.css";
import { FaFacebookF, FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="contactUs bg-fixed text-white my-40 ">
        <section className="pt-5 md:pt-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:h-[600px] h-[800px]">
          <div className="flex md:flex-row flex-col   md:justify-around  md:pt-28  pt-6">
            <div className=" flex flex-col md:text-start text-center">
              <h4 className="font-bold text-3xl text-white mb-6">CONTACT</h4>
              <div className="space-y-2">
                <p className="text-base text-white">
                  <strong>Address:</strong> 12 civil line Dewas
                </p>
                <p className=" text-base text-white">
                  <strong>Contact no:</strong> +66655-4567
                </p>
                <p className=" text-base text-white">
                  <strong>Email:</strong> picstudio123@gmail.com
                </p>
                <p className=" text-base text-white">
                  <strong>Website:</strong> www.picstudio.com
                </p>
              </div>
              <h4 className="font-bold text-3xl text-white mt-6">FOLLOW</h4>
              <div className="flex space-x-2 mt-4 w-fit md:mx-0 mx-auto ">
                <FaFacebookF/>
                <FaTwitterSquare/>
                <FaInstagram/>
                <FaLinkedin/>
              </div>
            </div>
            <div className="md:pt-0 pt-6">
           <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5 ">
           <input type="text" placeholder="Type here" className="input bg-transparent input-bordered border border-white w-3/4 mx-auto md:w-96 " />
            <input type="text" placeholder="Type here" className="input bg-transparent input-bordered border border-white w-3/4 mx-auto md:w-96 " />
            <input type="text" placeholder="Type here" className="input bg-transparent input-bordered border border-white w-3/4 mx-auto md:w-96 " />
            <input type="text" placeholder="Type here" className="input bg-transparent input-bordered border border-white w-3/4 mx-auto md:w-96 " />
           </div>
           <textarea placeholder="Bio" className="textarea bg-transparent border border-white textarea-bordered textarea-lg md:mt-8 mt-5 md:w-full w-3/4 md:ml-0 ml-12" ></textarea>
           <button className='md:mt-5 mt-2 md:w-full w-[150px] text-center mx-28 md:mx-0  btn text-gray-400 bg-transparent border border-white hover:bg-info hover:text-white '>Submit</button>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
