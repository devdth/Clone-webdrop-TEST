import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/help-center" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Help Center</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/blog" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Blog</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/community" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Community</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/academy" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Academy</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/products" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Products</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/login" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Login</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/signup" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Sign Up</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/grow" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Grow Your Store</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/demo" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Book a Demo</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="/contact" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">Contact Us</h1><p className="mt-4">This page is under construction.</p></div>} />
            <Route path="*" element={<div className="py-32 text-center"><h1 className="text-3xl font-bold">404 - Not Found</h1><p className="mt-4">The page you're looking for doesn't exist.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
