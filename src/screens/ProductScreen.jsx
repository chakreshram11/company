import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Sample product data
  const products = [
    { id: 1, name: 'Industrial Steel Pipe', description: 'Durable steel pipes for heavy-duty industrial use.', price: '$150 per unit' },
    { id: 2, name: 'PVC Water Pipe', description: 'High-quality PVC pipes for water management solutions.', price: '$50 per unit' },
    { id: 3, name: 'Custom Fabricated Pipe', description: 'Pipes made to order for specific project requirements.', price: 'Contact us for pricing' },
    { id: 4, name: 'Industrial Steel Pipe', description: 'Durable steel pipes for heavy-duty industrial use.', price: '$150 per unit' },
    { id: 5, name: 'PVC Water Pipe', description: 'High-quality PVC pipes for water management solutions.', price: '$50 per unit' },
    { id: 6, name: 'Custom Fabricated Pipe', description: 'Pipes made to order for specific project requirements.', price: 'Contact us for pricing' },
    { id: 7, name: 'Industrial Steel Pipe', description: 'Durable steel pipes for heavy-duty industrial use.', price: '$150 per unit' },
    { id: 8, name: 'PVC Water Pipe', description: 'High-quality PVC pipes for water management solutions.', price: '$50 per unit' },
    { id: 9, name: 'Custom Fabricated Pipe', description: 'Pipes made to order for specific project requirements.', price: 'Contact us for pricing' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <div className="mb-8 text-center">
        <button 
          onClick={() => navigate(-1)} 
          className="border-4 border-sky-500 rounded-lg bg-white p-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Back
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Our Products</h1>

      {/* Product Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-blue-600">Industrial Pipes</h3>
            <p className="text-sm text-gray-700 mt-2">High-performance pipes for industrial use, including steel, plastic, and alloy pipes.</p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-green-600">Residential Pipes</h3>
            <p className="text-sm text-gray-700 mt-2">Reliable and long-lasting pipes for household water supply and drainage.</p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-purple-600">Custom Piping Solutions</h3>
            <p className="text-sm text-gray-700 mt-2">We provide custom-fabricated pipes for unique project needs, designed to your specifications.</p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="font-bold text-xl text-green-600 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="mt-4 text-lg font-semibold text-gray-800">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12 bg-gradient-to-r from-green-100 to-green-200 py-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Need Custom Solutions?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us to discuss your specific project requirements. We offer custom-fabricated pipes and piping systems tailored to your needs.
        </p>
        <button 
          onClick={() => navigate('/contact')} 
          className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Get a Quote
        </button>
      </section>
    </div>
  );
}

export default ProductScreen;
