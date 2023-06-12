import React, { useEffect, useState } from 'react';
import MySelectedClassCard from './MySelectedClassCard';

const MySelectedClass = () => {
    const [myClasses, setMyClasses] = useState([])
    console.log(myClasses)

    useEffect(()=>{
        fetch('http://localhost:5000/mySelectedAllClasses')
        .then(res=> res.json())
        .then(data=> setMyClasses(data))
    },[])
    return (
        <div className='mt-20 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    myClasses.map(myClass=> <MySelectedClassCard
                        key={myClass._id}
                        item={myClass}
                    ></MySelectedClassCard>)
                }
            </div>
        </div>
    );
};

export default MySelectedClass;