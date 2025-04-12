import BrandStory from "./components/BrandStory";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <HeroSection />
    <Product />
    <BrandStory />
    <Newsletter /> */}
      {/* <Footer /> */}
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
       
    </>
  );
}

export default App;
