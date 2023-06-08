import React from "react";
import bg from "../assets/backgroung/hero-bg.png";
import slider1 from "../assets/backgroung/slider-1.jpg"
import slider2 from "../assets/backgroung/slider-2.jpg"
import slider3 from "../assets/backgroung/slider-3.jpg"
const Banner = () => {
  return (
    <div className="carousel w-full h-[1050px] ">
      <div id="slide1" className="carousel-item relative w-full">
        
        <img src={bg} className="w-full" />

       <div className="grid grid-cols-1 md:grid-cols-2">
       <div className="absolute flex items-center left-0 top-0 h-full rounded-xl">
            <div className="text-black space-y-7 w-1/2 pl-28 relative bottom-36">
                <h2 className="text-5xl font-bold w-3/4 ">PHOTOGRAPHY SCHOOL</h2>
                <p className=''>Since 2002 we've been training people to take beautiful photographs. By investing in our education, you'll be giving yourself the clearest, most concise and enjoyable photography training in the world.</p>
                <div className=''>
                <button className="btn btn-info mr-8 text-white">About Us</button>
                <button className="btn btn-neutral btn-secondary ">Get A Quote</button>
                </div>
            </div>
         
          </div>
      <div>
      <img src={slider1} className="h-96 w-96" alt="" />
      </div>
       </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-28 right-5 bottom-96 ">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      
      </div>





      <div id="slide2" className="carousel-item relative w-full">
        <img src={bg} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 rounded-xl h-full ">
          <div className="text-white space-y-7 w-1/2 pl-14">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam ex aliquam quam veritatis. Atque cum quae reprehenderit
              blanditiis, sit error magni!
            </p>
            <div>
              <button className="btn btn-primary mr-8">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={bg} className="w-full" />
        <div className="absolute flex items-center left-0 top-0 h-full rounded-xl">
          <div className="text-white space-y-7 w-1/2 pl-14">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam ex aliquam quam veritatis. Atque cum quae reprehenderit
              blanditiis, sit error magni!
            </p>
            <div>
              <button className="btn btn-primary mr-8">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bg} className="w-full " />
        <div className="absolute flex items-center left-0 top-0 h-full rounded-xl">
          <div className="text-white space-y-7 w-1/2 pl-14">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam ex aliquam quam veritatis. Atque cum quae reprehenderit
              blanditiis, sit error magni!
            </p>
            <div>
              <button className="btn btn-primary mr-8">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-10">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
