import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for managing mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header section fixed to top */}
      <div className="flex items-center justify-between bg-gray-100 h-16 w-full p-4 shadow-md fixed top-0 left-0 z-50">
        <div className="text-lg font-bold">
          <Link to="/"> {/* Link to home or logo */}
            <img src="/logo192.png" alt="Logo" className="h-12" /> {/* Adjust the path to your logo */}
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className='text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200'>Home</Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
          <Link to="/product" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Products</Link>
          <div className="relative flex items-center">
            <Link to="/contact" className="ml-4 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 pr-2">Contact Us</Link>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 animate-bounce"></span>
          </div>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links (Dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} text-center fixed top-16 left-0 w-full bg-gray-100 md:hidden z-40`}>
        <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-2" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-2" onClick={toggleMenu}>About</Link>
        <Link to="/product" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-2" onClick={toggleMenu}>Products</Link>
        <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-2" onClick={toggleMenu}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Header;
