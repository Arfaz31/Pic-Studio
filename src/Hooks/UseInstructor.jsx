import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
    const {user,  loading} = useContext(AuthContext)
    const [axiosSecure] = UseAxiosSecure()
    const {data:isInstructor, isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default UseInstructor;