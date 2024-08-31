
import React, { useState } from "react";
import DataTable from 'react-data-table-component';

import AddProgrammeModal from './AddProgramme';





const Programme = () => {


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
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title d-flex justify-content-between">
                                    <h4 >Bordered table</h4>
                                    <div class="d-flex justify-content-around">
                                        <button class="btn btn-primary m-1">add</button>
                                        <button class="btn btn-primary m-1">add</button>
                                    </div>
                                </div>

                                <p class="card-description"> Add class <code>.table-bordered</code>
                                </p>
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

            <AddProgrammeModal />
        </>
    );
}

export default Programme;
