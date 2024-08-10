
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import { BrowserRouter, Routes, Route, Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import appRouter from './routes/route';

import Dashboard from  './components/Dashboard';

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
          <Sidebar keyName={'Hello'}/>
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
