import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29.99,
      annualPrice: 24.99,
      description: "Perfect for new entrepreneurs starting their first dropshipping store",
      features: [
        "25 unique products",
        "5 premium products",
        "Unlimited orders",
        "Email support",
        "Shopify integration",
        "WooCommerce integration"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 49.99,
      annualPrice: 39.99,
      description: "For growing businesses looking to scale their product catalog",
      features: [
        "50 unique products",
        "25 premium products",
        "Unlimited orders",
        "Email & chat support",
        "All platform integrations",
        "Branded invoicing",
        "Premium suppliers"
      ],
      popular: true
    },
    {
      name: "Empire",
      monthlyPrice: 99.99,
      annualPrice: 79.99,
      description: "For established businesses with high-volume sales",
      features: [
        "Unlimited unique products",
        "Unlimited premium products",
        "Unlimited orders",
        "Priority support",
        "All platform integrations",
        "Branded invoicing",
        "Premium suppliers",
        "Bulk product imports",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing for Your Business
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a plan that works best for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="relative bg-gray-200 rounded-full p-1 inline-flex">
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative py-2 px-6 rounded-full text-sm font-medium focus:outline-none ${
                  isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-700'
                }`}
              >
                Annual (Save 20%)
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative py-2 px-6 rounded-full text-sm font-medium focus:outline-none ${
                  !isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-700'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                plan.popular ? 'ring-2 ring-[#4A90E2] md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#4A90E2] text-white text-xs font-semibold px-3 py-1">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-[#4A90E2] font-medium mt-1">
                      Billed annually (save 20%)
                    </div>
                  )}
                </div>
                <Link 
                  to="/signup" 
                  className={`block w-full text-center py-3 px-6 rounded-md font-medium ${
                    plan.popular 
                      ? 'bg-[#4A90E2] text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
              <div className="bg-gray-50 px-8 py-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  What's included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg mt-16 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 mb-6">
                We offer tailored solutions for high-volume merchants with specific needs. Our enterprise plan includes dedicated account management, custom API integrations, and premium support.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4A90E2] hover:bg-blue-600"
              >
                Contact Sales
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom API integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority technical support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Service level agreements (SLAs)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#4A90E2] mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom onboarding and training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
