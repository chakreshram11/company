import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

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

      {/* About Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About Pipe Company</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          Pipe Company is a leading manufacturer and supplier of high-quality piping solutions for various industries, including construction, oil & gas, and water management. For over 20 years, we have provided durable and reliable piping systems to businesses worldwide. Our commitment to innovation, sustainability, and customer satisfaction has established us as a trusted partner in the industry.
        </p>
      </section>

      {/* Mission and Values */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          Our mission is to deliver top-quality piping solutions that meet the highest industry standards while ensuring environmental sustainability. We aim to exceed our customers' expectations by providing reliable products, expert technical support, and timely delivery.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-center md:text-left">Our Values</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 leading-relaxed">
          <li><strong>Quality:</strong> We are dedicated to producing pipes that are strong, durable, and built to last.</li>
          <li><strong>Innovation:</strong> We continually invest in research and development to stay ahead of the curve in piping technologies.</li>
          <li><strong>Sustainability:</strong> We are committed to reducing our environmental impact through eco-friendly materials and processes.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and we strive to deliver outstanding service.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2">John Doe</h3>
            <p className="text-sm text-gray-600">CEO & Founder</p>
            <p className="mt-2 text-gray-700">
              John has over 30 years of experience in the piping industry and has led Pipe Company to become a global leader in piping solutions.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2">Jane Smith</h3>
            <p className="text-sm text-gray-600">Head of Engineering</p>
            <p className="mt-2 text-gray-700">
              Jane oversees the development of innovative piping technologies and ensures the highest standards of quality in all our products.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2">Mark Johnson</h3>
            <p className="text-sm text-gray-600">Chief Sustainability Officer</p>
            <p className="mt-2 text-gray-700">
              Mark leads our sustainability efforts, implementing eco-friendly processes and promoting the use of recycled materials in our products.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in learning more about Pipe Company or exploring opportunities to work with us? Contact us today to get started.
        </p>
        <button 
          onClick={() => navigate('/contact')} 
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default AboutScreen;
