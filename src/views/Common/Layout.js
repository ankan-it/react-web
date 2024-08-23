
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Navigate, Outlet, useNavigate, useLocation, } from "react-router-dom";
import React ,{useEffect} from 'react';

import {BASE_URL} from '../../constant/api.constant';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=>{
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token') =="" || localStorage.getItem('token')=='undefine' || localStorage.getItem('token')==null){
            navigate('/login')
        }
      },[]);
      
    return (
        <>
            <div class="container-scroller">
                <Sidebar />
                <div class="container-fluid page-body-wrapper">
                    <Navbar />
                    <div class="main-panel">
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}