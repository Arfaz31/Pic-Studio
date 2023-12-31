import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const ManageUser = () => {
    const[axiosSecure] = UseAxiosSecure()
const {data: users = [], refetch} = useQuery(['users'], async()=>{
  // const res = await fetch('https://pic-studio-server-arfaz31.vercel.app/users')
  // return res.json()
    const res = await axiosSecure.get('/users')
    return res.data
})

const handleMakeAdmin = (user) =>{
fetch(`https://pic-studio-server-arfaz31.vercel.app/users/admin/${user._id}`,{
    method: 'PATCH'
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data.modifiedCount){
        refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            })
    }
})
}
const handleMakeInstructor = (user) =>{
fetch(`https://pic-studio-server-arfaz31.vercel.app/users/instructor/${user._id}`,{
    method: 'PATCH'
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data.modifiedCount){
      refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Instructor Now!`,
              showConfirmButton: false,
              timer: 1500
            })
    }
})
}

    return (
        <div>
            <div className="overflow-x-auto bg-slate-200">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index)=>
            <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'student'}</td>
        <td><button disabled={user.role === "admin"} onClick={() =>handleMakeAdmin(user) } className="btn btn-info  btn-sm">Admin</button></td>
        <td><button disabled={user.role === "instructor"} onClick={() =>handleMakeInstructor(user) } className="btn btn-info  btn-sm">Instructor</button></td>
      
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;