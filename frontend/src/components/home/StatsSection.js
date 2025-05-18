import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Entrepreneurs Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful entrepreneurs who have chosen Spocket to build and scale their dropshipping businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4A90E2] mb-2">20M+</div>
            <p className="text-gray-700">Winning Products Catalog</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4A90E2] mb-2">500K+</div>
            <p className="text-gray-700">Entrepreneurs Love Spocket</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4A90E2] mb-2">$2B+</div>
            <p className="text-gray-700">Earned by Entrepreneurs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
