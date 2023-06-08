import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo-1.png"

const Navbar = () => {

    const navItem =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
    <li><Link>Dashboard</Link></li>
  </>

    return (
        <div className="navbar bg-cyan-100 bg-opacity-30 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
            </ul>
          </div>
          <div className="md:ml-10 flex items-center pl-20 md:pl-0">
            <img   src={logo} alt="" className="" />
          <Link to='/'> <div>
              <p className="normal-case text-black tracking-tighter font-bold md:text-2xl ps-2">PICSTUDIO</p>
              
            </div>
            </Link> 
          </div>
        </div>


        <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold items-center">
            {navItem}
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;