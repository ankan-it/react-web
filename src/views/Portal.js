import axios from 'axios';
import { BASE_URL } from '../constant/api.constant';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = () => {
    const navigate = useNavigate();

    // console.log(BASE_URL);
    const [centre_id, setcentre_id] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            navigate('/login')
        }
    }, []);


    let check_login = async () => {
        const loginData = {
            centre_id: centre_id,
            username: username,
            password: password
        }
        // console.log(loginData);
        try {
            const response = await axios.post(BASE_URL + '/auth/login.php', loginData);

            if (response.data.status == 'success') {
                localStorage.setItem('token', response.data.token);
                setErrorMessage("");
                navigate('/');

            } else {
                // document.getElementById("error_msg").
                setErrorMessage(response.data.message);
            }


        } catch (error) {
            console.error("Error fetching banner data:", error);
        }
    }

    const centers = [
        {
            value: 171,
            label: "Administrator",
        },
        {
            value: 232,
            label: "Admin",
        },
        {
            value: 227,
            label: "Accounts Admin",
        },
        {
            value: 231,
            label: "Staff Member",
        }
    ];



    return (
        <>
            <style>
                {`
                    .form-select{
                        #f3f3f3 !important;
                    }
                    .form-group label{
                        margin-bottom: 5px;
                    }
                    .container-fluid{
                        margin-left: 0px;
                        margin-right: 0px;
                        width:100%;
                    }
                    .navbar {
                        left: 0;
                    }
                    .container-scroller{
                        height: 100%;
                    }
                    .content-wrapper{
                        background: linear-gradient(0deg, #00000075, #00000075), url('https://buis.brainware-india.net/static/media/brainware-university.c6e198d8555d00b73d4b.webp');
                        background-size: cover;
                        display: flex;
                        align-items: center;
                        width:100%;
                    }
                    .icon {
                        font-size:50px;
                        width: 100px;
                    }
                                                
                        
                    
                `}
            </style>
            <div class="container-scroller">

                <div class="container-fluid page-body-wrapper">
                    {/* <!-- partial:partials/_navbar.html --> */}
                    <nav class="navbar p-0 fixed-top d-flex flex-row">
                        <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                            <a class="navbar-brand brand-logo-mini" href="index.html"><img src="../../../assets/images/logo-mini.svg" alt="logo" /></a>
                        </div>
                        <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">

                            <ul class="navbar-nav navbar-nav-right">

                                <li class="nav-item dropdown">
                                    <a class="nav-link" id="profileDropdown" href="#" data-bs-toggle="dropdown">
                                        <div class="navbar-profile">
                                            <img class="img-xs rounded-circle" src="../../../assets/images/faces/face15.jpg" alt="" />
                                            <p class="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                                            <i class="mdi mdi-menu-down d-none d-sm-block"></i>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                        <h6 class="p-3 mb-0">Profile</h6>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item preview-item">
                                            <div class="preview-thumbnail">
                                                <div class="preview-icon bg-dark rounded-circle">
                                                    <i class="mdi mdi-cog text-success"></i>
                                                </div>
                                            </div>
                                            <div class="preview-item-content">
                                                <p class="preview-subject mb-1">Settings</p>
                                            </div>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item preview-item">
                                            <div class="preview-thumbnail">
                                                <div class="preview-icon bg-dark rounded-circle">
                                                    <i class="mdi mdi-logout text-danger"></i>
                                                </div>
                                            </div>
                                            <div class="preview-item-content">
                                                <p class="preview-subject mb-1">Log out</p>
                                            </div>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <p class="p-3 mb-0 text-center">Advanced settings</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- partial --> */}
                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="row w-100">
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-school"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center d-flex justify-content-center">
                                                        <h3 class="mt-2">Academics</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12  d-flex justify-content-center">
                                                    <div class="icon icon-box-success">
                                                        <span class="mdi mdi-account-multiple-outline"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <h3 class="mt-2">Students</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-account"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="d-flex align-items-center d-flex justify-content-center">
                                                        <h3 class="mt-2">Mentor</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-school"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center d-flex justify-content-center">
                                                        <h3 class="mt-2">Placement</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-school"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center d-flex justify-content-center">
                                                        <h3 class="mt-2">Hostel</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-brightness-5"></span>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-flex align-items-center d-flex justify-content-center">
                                                        <h3 class="mt-2">Settings</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content-wrapper ends --> */}
                        {/* <!-- partial:partials/_footer.html --> */}
                        <footer class="footer">
                            <div class="d-sm-flex justify-content-center justify-content-sm-between">
                                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 <a href="https://www.bootstrapdash.com/" target="_blank">BootstrapDash</a>. All rights reserved.</span>
                                <span class="text-muted float-none float-sm-end d-block mt-1 mt-sm-0 text-center"> <span class="text-muted float-none float-sm-end d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span> <i class="mdi mdi-heart text-danger"></i></span>
                            </div>
                        </footer>
                        {/* <!-- partial --> */}
                    </div>
                    {/* <!-- main-panel ends --> */}
                </div>

            </div>
        </>
    )
}

export default Portal;