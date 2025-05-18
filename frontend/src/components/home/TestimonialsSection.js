import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Fashion Store Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "Spocket has transformed my online business. I went from struggling to find reliable suppliers to having access to thousands of high-quality products. My sales increased by 200% in just three months!"
    },
    {
      name: "David Chen",
      role: "Home Decor Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The automated order fulfillment feature saves me hours every day. I can focus on marketing my store instead of worrying about processing orders manually. Absolutely worth every penny."
    },
    {
      name: "Sophie Miller",
      role: "Beauty Products Retailer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "What I love most about Spocket is the quality of suppliers. My customers rave about the fast shipping times and premium products, which has resulted in many repeat purchases and referrals."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Spocket Users
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from entrepreneurs who have built thriving businesses with Spocket.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <svg className="h-12 w-12 text-[#4A90E2] mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join 500,000+ entrepreneurs who trust Spocket</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <svg className="h-6 w-6 text-[#4A90E2] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Access to premium suppliers worldwide</p>
                </li>
                <li className="flex">
                  <svg className="h-6 w-6 text-[#4A90E2] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Fast shipping times to satisfy customers</p>
                </li>
                <li className="flex">
                  <svg className="h-6 w-6 text-[#4A90E2] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Branded invoicing for a professional touch</p>
                </li>
                <li className="flex">
                  <svg className="h-6 w-6 text-[#4A90E2] mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Automated order processing to save time</p>
                </li>
              </ul>
              <div className="flex mt-auto">
                <button 
                  onClick={prevTestimonial}
                  className="mr-2 p-2 rounded-full border border-gray-300 hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
