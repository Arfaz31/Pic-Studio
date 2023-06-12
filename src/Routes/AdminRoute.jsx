import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import UseRole from '../Hooks/UseRole';


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseRole()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className='w-max mx-auto  text-white'>
            <button type="button" class="bg-indigo-500 p-4 font-lg " disabled>
        Processing...
      </button>
        </div>
    }


    if(user && isAdmin){
        return children;
    }
    return  <Navigate state={{from: location}} to='/login' replace></Navigate>;
}

export default AdminRoute;






























