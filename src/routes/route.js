

import { createBrowserRouter, } from "react-router-dom";
import Dashboard from '../components/Dashboard';


export const protectedRoutes = [
    {
        key: "notfound",
        authority: [],
    }
];

const appRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />
        }
    ]);
    return router;
}

export default appRouter();