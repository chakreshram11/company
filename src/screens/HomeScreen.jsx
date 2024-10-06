import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json';
import Banner from '../components/Banner'; // Import the new Banner component

function HomeScreen() {
  const scrollContainerRef = useRef(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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

  // IntersectionObserver for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );
  
    const elements = document.querySelectorAll('.animate-section');
    elements.forEach((element) => observer.observe(element));
  
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  

  return (
    <div className="container mx-auto">
      {/* Scrollable banner container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-64 md:h-96 scrollbar-hide rounded-lg"
      >
        {HomeConfig.banners.map((banner, index) => (
          <Banner
            key={banner.id}
            banner={banner}
            isActive={index === currentBannerIndex} // Pass if the banner is currently active
          />
        ))}
      </div>

      <div
        className={`mt-2 p-2 text-4xl rounded-lg font-extrabold text-center mb-8 text-gradient bg-gradient-to-r from-blue-600 via-green-400 to-blue-500 ${
          isVisible['welcome'] ? 'animate-fadeIn' : ''
        } animate-section`}
        id="welcome"
      >
        <h1>Welcome to Pipe Company</h1>
      </div>

      {/* Introduction section */}
      <section
        className={`mb-12 px-4 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 rounded-lg shadow-md ${
          isVisible['introduction'] ? 'animate-fadeIn' : ''
        } animate-section`}
        id="introduction"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="text-blue-600 font-semibold">Pipe Company</span>, we are dedicated to providing top-tier piping solutions for industrial, residential, and commercial applications. With over 20 years of experience, our products are trusted by engineers and businesses around the world. Our commitment to quality, innovation, and sustainability sets us apart.
        </p>
      </section>

      {/* Featured Products */}
      <section
  className={`mb-12 animate-section ${isVisible['featured-products'] ? 'animate-fadeUp' : ''}`}
  id="featured-products"
>
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Featured Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-blue-50">
      <h3 className="font-bold text-lg text-blue-600">Industrial Pipes</h3>
      <p className="text-gray-600">
        Engineered for high performance in tough industrial environments. Available in various materials including steel, PVC, and more.
      </p>
    </div>
    <div className="bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-green-50">
      <h3 className="font-bold text-lg text-green-600">Residential Pipes</h3>
      <p className="text-gray-600">
        High-quality and reliable pipes for water supply and drainage systems in residential projects.
      </p>
    </div>
    <div className="bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-yellow-50">
      <h3 className="font-bold text-lg text-yellow-600">Custom Piping Solutions</h3>
      <p className="text-gray-600">
        Custom-fabricated pipes tailored to meet the specific needs of your project, no matter the size or complexity.
      </p>
    </div>
  </div>
</section>


      {/* Our Expertise */}
      <section
        className={`mb-12 px-4 bg-gradient-to-r from-green-100 via-green-50 to-green-100 py-8 rounded-lg shadow-md ${
          isVisible['expertise'] ? 'animate-fadeUp' : ''
        } animate-section`}
        id="expertise"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Our Expertise</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a team of highly skilled engineers and technicians, <span className="text-green-600 font-semibold">Pipe Company</span> delivers piping solutions that are both efficient and cost-effective. We specialize in a wide range of piping technologies, from high-pressure industrial applications to eco-friendly, sustainable options.
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-700">
          <li>Comprehensive product range for various industries</li>
          <li>On-site consultations and technical support</li>
          <li>Customizable piping systems for unique project needs</li>
          <li>Certified by leading global standards organizations</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section
        className={`mb-12 text-center ${
          isVisible['cta'] ? 'animate-fadeUp' : ''
        } animate-section`}
        id="cta"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Get a Quote Today!</h2>
        <p className="text-lg text-gray-700">Contact us to learn more about our products or to request a custom quote for your project.</p>
        <Link to="/contact">
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-lg hover:bg-gradient-to-l hover:from-green-600 hover:to-green-800 transition duration-300">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

export default HomeScreen;
