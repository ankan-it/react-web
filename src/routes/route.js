

import { createBrowserRouter } from "react-router-dom";
import { useJwt } from "react-jwt";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, RouterProvider, Navigate  } from "react-router-dom";




import Layout from '../components/Common/Layout';
import Dashboard from '../components/Dashboard';
import Table from '../components/Table';

import Login from "../components/Login";



const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    return localStorage.getItem("token") == null;
};

const ProtectedRoute = ({ element }) => {
    var token = localStorage.getItem('token');
    const { isExpired } = useJwt(token);
    console.log(localStorage.getItem("token"), isAuthenticated());
   

    if (isAuthenticated() || isExpired) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
    }

    return element;
};

const AppRouter = () => {
    const router = createBrowserRouter(route);
    return router;
}

const route =[
                {
                    element: <Layout />,
                    path:"/",
                    children:[
                        {
                            path: "/",
                            element:<ProtectedRoute element={<Dashboard />} />
                        },
                        {
                            path: "/table",
                            element:<ProtectedRoute element={ <Table />} /> 
                        }
                    ]

                },
                {
                    element: <Login />,
                    path:"/login"
                }
            ];

export default AppRouter();