import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import electronic_banner from './assets/Multi-Banner-3.png'
import LoginSignup from "./Pages/LoginSignup";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App dark:bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/electronics" element={<ShopCategory banner={electronic_banner} category="electronics"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<LoginSignup/>}/>
        </Routes>
        <Footer />
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
