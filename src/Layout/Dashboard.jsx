import React, { useContext } from "react";
import {
  FaHome,
  FaRegPlusSquare,
  FaRegUser,
  FaUserCheck,
  FaUserCog,
  FaUserFriends,
  FaUsersCog,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../src/assets/logo/logo-1.png";
// import useAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import useAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstructor";

const Dashboard = () => {
  // const isAdmin = true;
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = UseInstructor();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-info drawer-button lg:hidden md:my-0 my-10"
          >
            Open drawer
          </label>

          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-700 space-y-4">
            {/* Sidebar content here */}
            <div className="md:ml-10 flex items-center pl-20 md:pl-0">
              <img src={logo} alt="" className="" />
              <Link to="/">
                {" "}
                <div>
                  <p className="normal-case text-white tracking-tighter font-bold md:text-2xl ps-2">
                    PICSTUDIO
                  </p>
                </div>
              </Link>
            </div>
            <div className="divider bg-white h-1"></div>

            {isInstructor && !isAdmin ? (
              <>
                <li className="text-white">
                  <Link>
                    <FaHome></FaHome>Instructor Home
                  </Link>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/addClass">
                    <FaRegUser></FaRegUser> Add A Class
                  </NavLink>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/myClass">
                    <FaUserCheck></FaUserCheck> My Classes
                  </NavLink>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/totalEnrolledClasses">
                    <FaUserCheck></FaUserCheck> Total Enrolled Students
                  </NavLink>
                </li>
              </>
            ) : isAdmin ? (
              <>
                <li className="text-white">
                  <Link>
                    <FaHome></FaHome>Admin Home
                  </Link>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/manageClasses">
                    <FaUserCog></FaUserCog> Manage Classes
                  </NavLink>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsersCog></FaUsersCog> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-white">
                  <Link>
                    <FaHome></FaHome>Student Home
                  </Link>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/mySelectedClasses">
                    <FaUserFriends></FaUserFriends> My Selected Classes
                  </NavLink>
                </li>
                <li className="text-white">
                  <NavLink to="/dashboard/myEnrolledClasses">
                    <FaUserCheck></FaUserCheck> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider bg-white h-1"></div>
            <li className="text-white">
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
