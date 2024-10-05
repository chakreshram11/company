import React, { useState, useEffect, useRef } from 'react';
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
    <div>
      {/* Scrollable banner container */}
      <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory w-full h-64 md:h-96 scrollbar-hide">
        {HomeConfig.banners.map((banner, index) => (
          <Banner
            key={banner.id}
            banner={banner}
            isActive={index === currentBannerIndex} // Pass if the banner is currently active
          />
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">HomeScreen</h1>
    </div>
  );
}

export default HomeScreen;
