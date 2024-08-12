

import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Table from '../components/Table';


const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/table",
            element: <Table />
        }
    ]);
    return router;
}

export default AppRouter();