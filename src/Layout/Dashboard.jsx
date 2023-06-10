import React from 'react';
import { FaHome, FaRegPlusSquare, FaRegUser, FaUserCheck, FaUserCog, FaUserFriends, FaUsersCog } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../src/assets/logo/logo-1.png"
const Dashboard = () => {
    const isAdmin = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-gray-700 space-y-4">
      {/* Sidebar content here */}
      <div className="md:ml-10 flex items-center pl-20 md:pl-0">
            <img   src={logo} alt="" className="" />
          <Link to='/'> <div>
              <p className="normal-case text-white tracking-tighter font-bold md:text-2xl ps-2">PICSTUDIO</p>
              
            </div>
            </Link> 
          </div>
          <div className="divider bg-white h-1"></div>


          {
            isAdmin ? <>
             <li className="text-white"><Link><FaHome></FaHome>Admin Home</Link></li>
             <li className="text-white"><Link to='/dashboard/manageClasses'><FaUserCog></FaUserCog>  Manage Classes</Link></li>
              <li className="text-white"><Link to='/dashboard/manageUsers'><FaUsersCog></FaUsersCog> Manage Users</Link></li>
            </> : <>
            <li className="text-white"><Link><FaHome></FaHome>Student Home</Link></li>
            <li className="text-white"><Link to='/dashboard/mySelectedClasses'><FaUserFriends></FaUserFriends> My Selected Classes</Link></li>
            <li className="text-white"><Link to='/dashboard/myEnrolledClasses'><FaUserCheck></FaUserCheck>  My Enrolled Classes</Link></li>
            <li className="text-white"><Link to='/dashboard/addClass'><FaRegPlusSquare></FaRegPlusSquare> Add a Class</Link></li>
            <li className="text-white"><Link to='/dashboard/myClass'><FaRegUser></FaRegUser> My Classes</Link></li>
            </>
          }
          <div className="divider bg-white h-1"></div>
          <li className="text-white"><Link to='/'><FaHome></FaHome>Home</Link></li>




    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;