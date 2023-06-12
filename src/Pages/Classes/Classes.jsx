import React from 'react';
import BannerCover from '../../Shared/BannerCover/BannerCover';
import classes from "../../assets/banner/CLASSES.jpg"
import { useLoaderData } from 'react-router-dom';
import ClassCard from './ClassCard';
const Classes = () => {
    const loadClasses= useLoaderData()
   
    return (
        <div>
          <BannerCover
                   image={classes}
                   title='PICSTUDIO BEST CLASSES'
                   subTitle='Our classes are easy to perceive and unique that fulfill your expectation'
          ></BannerCover>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:ml-10 mb-10 py-20'>
           {
                loadClasses.map(loadClass=> <ClassCard
                key={loadClass._id}
                item={loadClass}
                ></ClassCard>)
            }
           </div>
        </div>
    );
};

export default Classes;