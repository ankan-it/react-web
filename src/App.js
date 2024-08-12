
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route, Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import AppRouter from './routes/route';


function App() {

  // const router =createBrowserRouter([
  //     {
  //         path:"/",
  //         element:<Dashboard/>
  //     }
  // ]);


  return (
    <>
      <BrowserRouter >
        <div class="container-scroller">
          <Sidebar />
          <div class="container-fluid page-body-wrapper">
            <Navbar />
            <div class="main-panel">
              <RouterProvider router={AppRouter} /> 
              {/* main panel */}
              
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
