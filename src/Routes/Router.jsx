import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyClass from "../Pages/Instructors/MyClass/MyClass";
import AddClass from "../Pages/Instructors/AddClass/AddClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
    
      
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      //admin
      {
        path:"manageUsers",
        element: <ManageUser/>
      },
      {
        path:"manageClasses",
        element: <ManageClasses/>
      },

       //instructor
       {
        path:"myClass",
        element: <MyClass/>
      },
      {
        path:"addClass",
        element: <AddClass/>
      }
    ]
  },
]);
