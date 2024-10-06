import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    alert('Thank you for contacting us!');
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="border-4 border-sky-500 rounded-lg bg-white p-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Back
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Company Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Office</h2>
        <p className="text-lg text-gray-700 text-center">
          <strong>Pipe Company</strong><br />
          1234 Industrial Road, Suite 100<br />
          Pipe City, PC 56789<br />
          Phone: +1 (123) 456-7890<br />
          Email: support@pipecompany.com
        </p>
      </section>

      {/* Contact Form */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" 
              rows="4" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Placeholder */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Location</h2>
        <div className="bg-white h-64 rounded-lg shadow-lg flex items-center justify-center text-gray-700 mx-4 md:mx-0">
          [Map Placeholder]
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">Our office is conveniently located in Pipe City. Please visit us for any in-person inquiries.</p>
      </section>
    </div>
  );
}

export default ContactScreen;
