import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Shopify",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825500.png"
    },
    {
      name: "WooCommerce",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825507.png"
    },
    {
      name: "BigCommerce",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825484.png"
    },
    {
      name: "Wix",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825506.png"
    },
    {
      name: "Squarespace",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825496.png"
    },
    {
      name: "Ecwid",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825488.png"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seamless Integration with Your Favorite Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Spocket integrates with all major ecommerce platforms to make your dropshipping journey smooth and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="h-12 w-12 mb-3 opacity-70"
              />
              <p className="text-sm font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
