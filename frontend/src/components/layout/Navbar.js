import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-[#4A90E2]">Spocket</div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/pricing" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="/help-center" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Help Center
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Community
            </Link>
            <Link to="/academy" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Academy
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-[#4A90E2] px-3 py-2 text-sm font-medium">
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="ml-4 bg-[#4A90E2] hover:bg-blue-600 text-white px-6 py-2 text-sm font-medium rounded-md"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4A90E2] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-[#4A90E2]"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Pricing
            </Link>
            <Link to="/help-center" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Help Center
            </Link>
            <Link to="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Blog
            </Link>
            <Link to="/community" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Community
            </Link>
            <Link to="/academy" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Academy
            </Link>
            <Link to="/products" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Products
            </Link>
            <Link to="/login" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4A90E2] hover:bg-gray-50">
              Log in
            </Link>
            <Link to="/signup" className="block pl-3 pr-4 py-2 text-base font-medium bg-[#4A90E2] text-white hover:bg-blue-600 rounded-md m-3">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
