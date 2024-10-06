import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Sample product data
  const products = [
    { id: 1, name: 'Industrial Steel Pipe', description: 'Durable steel pipes for heavy-duty industrial use.', price: '$150 per unit' },
    { id: 2, name: 'PVC Water Pipe', description: 'High-quality PVC pipes for water management solutions.', price: '$50 per unit' },
    { id: 3, name: 'Custom Fabricated Pipe', description: 'Pipes made to order for specific project requirements.', price: 'Contact us for pricing' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="border-4 border-sky-500 rounded-lg p-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Back
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {/* Product Categories */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Industrial Pipes</h3>
            <p>High-performance pipes for industrial use, including steel, plastic, and alloy pipes.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Residential Pipes</h3>
            <p>Reliable and long-lasting pipes for household water supply and drainage.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Custom Piping Solutions</h3>
            <p>We provide custom-fabricated pipes for unique project needs, designed to your specifications.</p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Need Custom Solutions?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Contact us to discuss your specific project requirements. We offer custom-fabricated pipes and piping systems tailored to your needs.
        </p>
        <button 
          onClick={() => navigate('/contact')} 
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Get a Quote
        </button>
      </section>
    </div>
  );
}

export default ProductScreen;
