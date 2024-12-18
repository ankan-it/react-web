
import React, { useState } from "react";
import DataTable from 'react-data-table-component';

// import DataTable from 'react-data-table-component';
import axios from 'axios';
import { BASE_URL } from '../../../../../constant/api.constant';
// import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwt } from "react-jwt";

import AddProgrammeModal from './AddProgramme';





const Programme = () => {

    const [programmeData, setprogrammeData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');


    let get_programme = async () => {
        const loginData = {
            
        }
        // console.log(loginData);
        try {
            const response = await axios.post(BASE_URL + '/auth/login.php', loginData);

            if (response.data.status == 'success') {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_data', JSON.stringify(response.data.data));
                setErrorMessage("");
                // navigate('/');

            } else {
                // document.getElementById("error_msg").
                setErrorMessage(response.data.message);
            }


        } catch (error) {
            console.error("Error fetching banner data:", error);
        }
    }


    return (
        <>
            {/* <h1>table</h1> */}
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title"> Basic Tables </h3>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Tables</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Basic tables</li>
                        </ol>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Horizontal Two column</h4>
                                <form class="form-sample">
                                    {/* <p class="card-description"> Personal info </p> */}
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">First Name</label>
                                                <div class="col-sm-9">
                                                    <select class="form-select " id="exampleFormControlSelect1">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Last Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group row">
                                                {/* <label class="col-sm-3 col-form-label">Last Name</label> */}
                                                <div class="col-sm-9">
                                                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex justify-content-between">
                                    <h4 >Bordered table</h4>
                                    {/* <div class="d-flex justify-content-around">
                                        <button class="btn btn-primary m-1">add</button>
                                        <button class="btn btn-primary m-1">add</button>
                                    </div> */}
                                </div>

                                {/* <p class="card-description"> Add class <code>.table-bordered</code>
                                </p> */}
                                <div class="table-responsive">

                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th> # </th>
                                                <th> First name </th>
                                                <th> Progress </th>
                                                <th> Amount </th>
                                                <th> Deadline </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 6 </td>
                                                <td> John Doe </td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td> $ 123.21 </td>
                                                <td> April 05, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 7 </td>
                                                <td> Henry Tom </td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td> $ 150.00 </td>
                                                <td> June 16, 2015 </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <AddProgrammeModal /> */}
        </>
    );
}

export default Programme;
