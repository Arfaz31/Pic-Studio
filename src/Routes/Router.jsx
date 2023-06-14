import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
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
import AdminRoute from "./AdminRoute";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import Instructor from "../Pages/Instructor/Instructor";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        path: "/instructor",
        element: <Instructor />,
        loader: () => fetch('http://localhost:5000/ourInstructor')
    
      },
      {
        path: "/classes",
        element: <Classes />,
        loader: () => fetch('http://localhost:5000/ourClasses')
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
        element: <AdminRoute><ManageClasses/></AdminRoute>
      },
      {
        path:"feedback",
        element: <Feedback/>
      },

       //instructor
       {
        path:"myClass",
        element: <MyClass/>
      },
      {
        path:"addClass",
        element: <AddClass/>
      },

      //Student
      {
        path:"mySelectedClasses",
        element: <MySelectedClass/>
      },
      {
        path:"myEnrolledClasses",
        element: <MyEnrolledClass/>,
        loader: () => fetch('http://localhost:5000/enrolledClasses')
      },
      {
        path:"payment",
        element: <Payment/>
      },
      
    ]
  },
]);
