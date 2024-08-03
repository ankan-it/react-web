
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {




  return (
    // <>
    //   <BrowserRouter>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/blog" element={<Blog/>} />
    //       <Route path="/shop" element={<Shop/>} />
    //       <Route path="/about" element={<About/>} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // </>
    <>
      {/* <BrowserRouter> */}
        <div class="container-scroller">
          
          {/* <!-- partial:partials/_sidebar.html --> */}
          <Sidebar />
          {/* <!-- partial --> */}
          <div class="container-fluid page-body-wrapper">
            {/* <!-- partial:partials/_navbar.html --> */}
            <Navbar />
            {/* <!-- partial --> */}
            <div class="main-panel">

              <Footer />
            </div>
            {/* <!-- main-panel ends --> */}
          </div>
          {/* <!-- page-body-wrapper ends --> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
