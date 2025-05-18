import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Explore Best Dropshipping Suppliers with Spocket
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Spocket is the most powerful automated dropshipping software designed to streamline your online store and discover trending products to sell from thousands of dropshipping suppliers worldwide.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Link 
                to="/signup" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4A90E2] hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Start 14 Days Free Trial
              </Link>
              <Link 
                to="/grow" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Grow My Existing Store
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Erin Rafferty" 
                  className="h-10 w-10 rounded-full mr-3"
                />
                <p className="text-sm text-gray-600 italic">
                  "I have earned $442,991 USD in just six months by building a dropshipping business that people loved."
                  <span className="block font-medium text-gray-900 not-italic mt-1">- Erin Rafferty</span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#4A90E2]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-600">Create dropshipping store in minutes</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#4A90E2]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-600">Get 14 day trial, cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1631010231931-d2c396b444ec" 
              alt="Dropshipping concept" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
