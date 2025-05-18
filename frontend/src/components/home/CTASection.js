import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-[#4A90E2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Dropshipping Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of successful entrepreneurs who have built profitable businesses with Spocket. Start your 14-day free trial today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-md text-[#4A90E2] bg-white hover:bg-blue-50 md:text-lg"
            >
              Start 14 Days Free Trial
            </Link>
            <Link 
              to="/demo" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-600 md:text-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
