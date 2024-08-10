
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route, Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import appRouter from './routes/route';


function App() {

  // const router =createBrowserRouter([
  //     {
  //         path:"/",
  //         element:<Dashboard/>
  //     }
  // ]);


  return (
    <>
        <div class="container-scroller">
          <Sidebar />
          <div class="container-fluid page-body-wrapper">
            <Navbar />
            <div class="main-panel">
              <RouterProvider router={appRouter} />              
              <Footer />
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
