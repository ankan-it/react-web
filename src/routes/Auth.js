import { createBrowserRouter } from "react-router-dom";

import { BrowserRouter, Routes, Route, useNavigate, useLocation, RouterProvider, Navigate  } from "react-router-dom";

import { useJwt } from "react-jwt";

const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    return localStorage.getItem("token") == null;
};


export const ProtectedRoute = ({ element }) => {
    var token = localStorage.getItem('token');
    const { isExpired } = useJwt(token);
    console.log(localStorage.getItem("token"), isAuthenticated());  

    if (isAuthenticated() || isExpired) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
    }

    return element;
};

// export default ProtectedRoute;