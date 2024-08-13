

import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Common/Layout';
import Dashboard from '../components/Dashboard';
import Table from '../components/Table';

import Login from "../components/Login";


const AppRouter = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            path:"/",
            children:[
                {
                    path: "/",
                    element: <Dashboard />
                },
                {
                    path: "/table",
                    element: <Table />
                }
            ]

        },
        {
            element: <Login />,
            path:"/login"
        }
    ]);
    return router;
}

export default AppRouter();