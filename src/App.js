import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import ContactScreen from "./screens/ContactScreen";
import ScrollToTop from "./components/ScrillToTop";

function App() {
  return (
    <div className="select-none">
    <Router>
      <ScrollToTop />
      <Header />
      <div className="font-bold text-center mt-9 mb-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
