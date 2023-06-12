import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import banner from "../../assets/banner/photo.jpg"



const Instructor = () => {
  const loaderInstructor = useLoaderData();
  return (
    <div>
        <BannerCover
    
    image={banner}
    title='PICSTUDIO INSTRUCTOR'
    subTitle='We provide best photography classes that helps to make yourself as a professional Photographer in different era '
        >

        </BannerCover>
  
      <div className="grid grid-cols-1 md:grid-cols-3   mb-10 w-3/4 mx-auto ">
        {loaderInstructor.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-80 mx-auto bg-slate-200 shadow-xl"
          >
            <figure>
              <img src={instructor.photoUrl} alt="instructor" className="p-3" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
