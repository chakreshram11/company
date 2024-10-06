import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json';
import Banner from '../components/Banner'; // Import the new Banner component

function HomeScreen() {
  const scrollContainerRef = useRef(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Automatic scrolling for the banner
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentBannerIndex(0);
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
          setCurrentBannerIndex((prev) => (prev + 1) % HomeConfig.banners.length);
        }
      }
    }, 7000); // Scroll every 7 seconds
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container mx-auto">
      {/* Scrollable banner container */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-64 md:h-96 scrollbar-hide"
      >
        {HomeConfig.banners.map((banner, index) => (
          <Banner
            key={banner.id}
            banner={banner}
            isActive={index === currentBannerIndex} // Pass if the banner is currently active
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 text-center animate-fadeIn">
        Welcome to Pipe Company
      </h1>

      {/* Introduction section */}
      <section className="mb-8 px-4 animate-fadeIn">
        <p className="text-lg text-gray-700 leading-relaxed">
          At Pipe Company, we are dedicated to providing top-tier piping solutions for industrial, residential, and commercial applications. With over 20 years of experience, our products are trusted by engineers and businesses around the world. Our commitment to quality, innovation, and sustainability sets us apart.
        </p>
      </section>

      {/* Featured Products */}
      <section className="mb-8 animate-fadeUp">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Industrial Pipes</h3>
            <p className="text-sm text-gray-600">
              Engineered for high performance in tough industrial environments. Available in various materials including steel, PVC, and more.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Residential Pipes</h3>
            <p className="text-sm text-gray-600">
              High-quality and reliable pipes for water supply and drainage systems in residential projects.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Custom Piping Solutions</h3>
            <p className="text-sm text-gray-600">
              Custom-fabricated pipes tailored to meet the specific needs of your project, no matter the size or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="mb-8 px-4 animate-fadeUp">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Expertise</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a team of highly skilled engineers and technicians, Pipe Company delivers piping solutions that are both efficient and cost-effective. We specialize in a wide range of piping technologies, from high-pressure industrial applications to eco-friendly, sustainable options.
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-600">
          <li>Comprehensive product range for various industries</li>
          <li>On-site consultations and technical support</li>
          <li>Customizable piping systems for unique project needs</li>
          <li>Certified by leading global standards organizations</li>
        </ul>
      </section>

      {/* Sustainable Solutions */}
      <section className="mb-8 px-4 animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-center">Sustainable Piping Solutions</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Pipe Company, we are committed to sustainability. Our eco-friendly piping solutions are designed to minimize environmental impact without compromising on quality and durability. We offer a range of products made from recycled materials and employ energy-efficient production methods to reduce our carbon footprint.
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-600">
          <li>Green-certified products for sustainable building projects</li>
          <li>Durable pipes with a reduced environmental impact</li>
          <li>Long-lasting materials that require minimal maintenance</li>
        </ul>
      </section>

      {/* Industries We Serve */}
      <section className="mb-8 animate-fadeUp">
        <h2 className="text-xl font-semibold mb-4 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Construction</h3>
            <p className="text-sm text-gray-600">
              Pipes and piping systems for residential, commercial, and large-scale construction projects.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Oil & Gas</h3>
            <p className="text-sm text-gray-600">
              Reliable and durable pipes for oil and gas exploration, drilling, and transportation systems.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="font-bold text-lg">Water Management</h3>
            <p className="text-sm text-gray-600">
              High-quality pipes designed for efficient water supply and drainage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-8 text-center animate-fadeUp">
        <h2 className="text-xl font-semibold mb-4">Get a Quote Today!</h2>
        <p className="text-lg text-gray-700">Contact us to learn more about our products or to request a custom quote for your project.</p>
        <Link to="/contact">
          <button className="bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

export default HomeScreen;
