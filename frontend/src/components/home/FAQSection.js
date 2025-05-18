import React, { useState } from 'react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "How Does Dropshipping Work?",
      answer: "Dropshipping allows you to sell products directly from suppliers without holding inventory. When a customer places an order on your online store, you forward the details to the supplier, who then handles packaging and shipping directly to the customer. With Spocket, this process is automated, saving you time and effort in order fulfillment."
    },
    {
      question: "Is There a Free Trial Available for Spocket?",
      answer: "Yes, Spocket offers a 14-day free trial at signup which can be easily canceled anytime. This allows you to explore all the premium features and determine if Spocket is the right fit for your dropshipping business before making a commitment."
    },
    {
      question: "Where Are Spocket Suppliers Located?",
      answer: "Spocket features suppliers from across the globe, with a strong emphasis on the US and EU markets. This geographical diversity allows merchants to choose products with faster shipping times to their target customers, enhancing the overall customer experience."
    },
    {
      question: "Can I Integrate Spocket with My Existing Online Store?",
      answer: "Absolutely! Spocket seamlessly integrates with major e-commerce platforms including Shopify, WooCommerce, BigCommerce, Wix, Squarespace, and Ecwid. The integration process is straightforward, allowing you to quickly connect your store and start importing products."
    },
    {
      question: "How Does Spocket Ensure Product Quality?",
      answer: "Spocket maintains a rigorous vetting process for all suppliers on the platform. Only around 30% of supplier applications are approved, ensuring that you have access to high-quality, reliable products. Additionally, you can order product samples before adding them to your store to personally verify their quality."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about Spocket? Find answers to common inquiries below.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform ${openItem === index ? 'rotate-180' : ''} transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItem === index && (
                <div className="px-6 pb-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
