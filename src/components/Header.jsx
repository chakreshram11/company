import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-100 h-20 w-full p-4 shadow-md'>
      <div className='text-lg font-bold'>
        <Link to="/"> {/* Link to home or logo */}
          <img src="/logo192.png" alt="Logo" className="h-16" /> {/* Adjust the path to your logo */}
        </Link>
      </div>

      <div className='flex space-x-4'>
        <Link to="/about" className='text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200'>About</Link>

        <Link to="/project" className='text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200'>Projects</Link>

        <div className="relative flex items-center">
          <Link to="/contact" className="ml-4 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 pr-2">
            Contact Us
          </Link>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 animate-bounce"></span>
        </div>

      </div>
    </div>
  );
}

export default Header;
