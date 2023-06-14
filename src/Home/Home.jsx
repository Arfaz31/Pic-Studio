import React from 'react';
import Banner from './Banner/Banner';
import Achievement from './Achievement/Achievement';
import ContactUs from './ContactUs/ContactUs';
import PopularInstructor from '../Pages/PopularInstructor/PopularInstructor';
import PopularClasses from '../Pages/PopularClasses/PopularClasses';



const Home = () => {
    return (
        <div>
        <Banner/>
        <PopularClasses/>
        <PopularInstructor/>
        <Achievement/>
        <ContactUs/>
        </div>
    );
};

export default Home;