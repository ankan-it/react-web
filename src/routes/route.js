

import { createBrowserRouter } from "react-router-dom";
import { useJwt } from "react-jwt";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, RouterProvider, Navigate  } from "react-router-dom";




import Layout from '../views/Common/Layout';
import Dashboard from '../views/Dashboard';
import Table from '../views/Table';
import Portal from '../views/Portal'

import Login from "../views/Login";
import {academics_route} from "./academics_route";





const AppRouter = () => {
    const router = createBrowserRouter(routes);
    return router;
}

const routes =[
                {
                    element: <Layout />,
                    path:"/",
                    children:[
                        {
                            path:"academics",
                            children:academics_route
                        },
                        {
                            index: true, // This will match the root path ("/")
                            element: <Navigate to="/portal" replace />
                        }
                    ]
                    
                    

                },
                {
                    element: <Portal />,
                    path:"/portal"
                },
                {
                    element: <Login />,
                    path:"/login"
                }
            ];

export default AppRouter();