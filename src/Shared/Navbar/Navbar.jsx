import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo-1.png"
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(() =>{

    }) 
    .catch(error => console.log(error))
  }
    const navItem =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
    <li><Link>Dashboard</Link></li>
   {user? <> 
    <button className='md:ml-2 ml-3 ' onClick={handleLogOut}>LogOut</button>
    <div className="md:mr-10 md:ml-6 mr-0 ml-3 md:mt-0 mt-2">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
            >
              <img
                src={user.photoURL}
                alt=""
                className=" rounded-full object-cover w-10 h-10"
              />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
   </> :
   <> 
    <li><Link to='/login'>Login</Link></li>
   </>
    
   }
  </>

    return (
        <div className="navbar bg-cyan-100 bg-opacity-30 fixed z-10 ">
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