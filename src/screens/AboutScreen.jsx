import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <div className="mb-8 text-center">
        <button 
          onClick={() => navigate(-1)} 
          className="border-4 border-sky-500 bg-white rounded-lg p-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Back
        </button>
      </div>

      {/* About Section */}
      <section className="mb-12 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 px-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center md:text-left text-blue-600">About Pipe Company</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          <span className="text-green-600 font-semibold">Pipe Company</span> is a leading manufacturer and supplier of high-quality piping solutions for various industries, including construction, oil & gas, and water management. For over 20 years, we have provided durable and reliable piping systems to businesses worldwide. Our commitment to innovation, sustainability, and customer satisfaction has established us as a trusted partner in the industry.
        </p>
      </section>

      {/* Mission and Values */}
      <section className="mb-12 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 px-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-green-700">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          Our mission is to deliver top-quality piping solutions that meet the highest industry standards while ensuring environmental sustainability. We aim to exceed our customers' expectations by providing reliable products, expert technical support, and timely delivery.
        </p>
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center md:text-left text-blue-600">Our Values</h2> 
          <ul className="list-none pl-5 text-lg text-gray-700 leading-relaxed text-left">
            <li><strong>Quality:</strong> We are dedicated to producing pipes that are strong, durable, and built to last.</li>
            <li><strong>Innovation:</strong> We continually invest in research and development to stay ahead of the curve in piping technologies.</li>
            <li><strong>Sustainability:</strong> We are committed to reducing our environmental impact through eco-friendly materials and processes.</li>
            <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and we strive to deliver outstanding service.</li>
          </ul>
      </section>

      {/* Team Section */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-blue-600">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-green-600 mb-2">John Doe</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
            <p className="mt-4 text-gray-700">
              John has over 30 years of experience in the piping industry and has led Pipe Company to become a global leader in piping solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-green-600 mb-2">Jane Smith</h3>
            <p className="text-sm text-gray-500">Head of Engineering</p>
            <p className="mt-4 text-gray-700">
              Jane oversees the development of innovative piping technologies and ensures the highest standards of quality in all our products.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-bold text-xl text-green-600 mb-2">Mark Johnson</h3>
            <p className="text-sm text-gray-500">Chief Sustainability Officer</p>
            <p className="mt-4 text-gray-700">
              Mark leads our sustainability efforts, implementing eco-friendly processes and promoting the use of recycled materials in our products.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12 bg-gradient-to-r from-green-100 to-green-200 py-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in learning more about <span className="text-green-600 font-semibold">Pipe Company</span> or exploring opportunities to work with us? Contact us today to get started.
        </p>
        <button 
          onClick={() => navigate('/contact')} 
          className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition duration-300"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default AboutScreen;
