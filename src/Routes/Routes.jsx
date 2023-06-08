import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import ManageUsers from "../Pages/Dashboard/ManageUser/ManageUsers";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <div>Error 404</div>
            },

                {
                    path: '/dashboard',
                    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                    children: [
                        {
                            path: '/dashboard/',
                            element: <DashboardHome></DashboardHome>
                        },
                        {
                            path: '/dashboard/manage-users',
                            element: <ManageUsers></ManageUsers>
                        }
                    ]
                }
        ]
    },

    
])