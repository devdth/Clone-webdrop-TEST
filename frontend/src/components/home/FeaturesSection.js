import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Fast and Reliable Shipping",
      description: "Partner with suppliers who offer quick shipping times to ensure customer satisfaction.",
      image: "https://images.unsplash.com/photo-1703227373720-cff89520dd31"
    },
    {
      title: "Premium Product Selection",
      description: "Access millions of high-quality products from trusted suppliers in the US and EU.",
      image: "https://images.unsplash.com/photo-1664382950442-0748f82f2752"
    },
    {
      title: "Automated Order Processing",
      description: "Save time with one-click order fulfillment directly to your suppliers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Spocket for Your Dropshipping Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Spocket helps ecommerce entrepreneurs build successful online stores with our powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
