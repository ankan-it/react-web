import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Header({ keyName }) {
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.pathname);


    const [activeItem, setActiveItem] = useState(location.pathname);
    let changeRoute = (e, path) => {
        e.preventDefault();
        // alert(path);
        navigate(path);
        setActiveItem("");
        setActiveItem(path);
    }
    console.log(location.pathname.startsWith());

    const openMenu = (id) => {
        var collaps_menu = document.querySelectorAll('.collapse');
        if (collaps_menu.length > 1) {
            collaps_menu.forEach(el => {
                if (el.id !== id) {
                    el.classList.remove('show');
                }
            });
        }

        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('show');
        }
    };

    const openMenu2 = (id) => {
        var collaps_menu = document.querySelectorAll('.collapse2');
        if (collaps_menu.length > 1) {
            collaps_menu.forEach(el => {
                if (el.id !== id) {
                    el.classList.remove('show');
                }
            });
        }

        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('show');
        }
    };

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path; // Ensure only the exact match for root path
        }
        return location.pathname.startsWith(`${path}/`);
    };
    // console.log(isActive);


    return (
        <>
            {/* <h1>asdjs</h1> */}
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <a class="sidebar-brand brand-logo" href="index.html"><img src="../../../assets/images/logo.svg" alt="logo" /></a>
                    <a class="sidebar-brand brand-logo-mini" href="index.html"><img src="../../../assets/images/logo-mini.svg" alt="logo" /></a>
                </div>
                <ul class="nav">
                    <li class="nav-item profile">
                        <div class="profile-desc">
                            <div class="profile-pic">
                                <div class="count-indicator">
                                    <img class="img-xs rounded-circle " src="../../../assets/images/faces/face15.jpg" alt="" />
                                    <span class="count bg-success"></span>
                                </div>
                                <div class="profile-name">
                                    <h5 class="mb-0 font-weight-normal">Henry Klein</h5>
                                    <span>Gold Member</span>
                                </div>
                            </div>
                            <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
                            <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                                <a href="#" class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-dark rounded-circle">
                                            <i class="mdi mdi-cog text-primary"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-dark rounded-circle">
                                            <i class="mdi mdi-onepassword  text-info"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-dark rounded-circle">
                                            <i class="mdi mdi-calendar-today text-success"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item nav-category">
                        <span class="nav-link sidebarButton">Navigation</span>
                    </li>

                    {/* main navigation start */}
                    <li className={`nav-item menu-items ${isActive('/') ? 'active' : ''}`}>
                        <button class="nav-link sidebarButton" onClick={(e) => changeRoute(e, '/')}>
                            <span class="menu-icon">
                                <i class="mdi mdi-speedometer"></i>
                            </span>
                            <span class="menu-title">Dashboard</span>
                        </button>
                    </li>

                    <li className={`nav-item menu-items ${isActive('/master') ? 'active' : ''}`}>
                        <button class="nav-link sidebarButton" data-bs-toggle="collapse" href="" aria-expanded="false" aria-controls="ui-basic" onClick={() => openMenu("master")}>
                            <span class="menu-icon">
                                <i class="mdi mdi-laptop"></i>
                            </span>
                            <span class="menu-title w-100 d-flex justify-content-between">Master <i class="mdi mdi-chevron-down"></i></span>
                            
                        </button>
                        <div className={`collapse ${isActive('/master') ? 'show' : ''}`} id="master">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <button className={`nav-link  d-flex justify-content-between  sidebarButton ${isActive('/master/batch') ? 'active' : ''}`}  onClick={() => openMenu2("master-batch")} >
                                        Batch <i class="mdi mdi-chevron-down"></i>
                                    </button>
                                    <div className={`collapse2 ${isActive('/master/batch') ? 'show' : ''}`} id="master-batch">
                                        <ul class="nav flex-column sub-menu" style={{"padding-left": "20px"}}>
                                            <li class="nav-item"> <button className={`nav-link sidebarButton ${activeItem === '/master/batch/programme' ? 'active' : ''}`} onClick={(e) => changeRoute(e, '/master/batch/programme')}>programme</button></li>
                                            <li class="nav-item"> <button className={`nav-link sidebarButton `} >Dropdowns</button></li>
                                            <li class="nav-item"> <button className={`nav-link sidebarButton `} >Typography</button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item"> <button className={`nav-link sidebarButton `} onClick={(e) => changeRoute(e, '/table')}>Configuration</button></li>
                                <li class="nav-item"> <button className={`nav-link sidebarButton `} >Dropdowns</button></li>
                                <li class="nav-item"> <button className={`nav-link sidebarButton `} >Typography</button></li>
                            </ul>
                        </div>
                    </li>

                    {/* main navigation end */}


                </ul>
            </nav>

        </>
    )
}