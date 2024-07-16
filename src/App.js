import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
