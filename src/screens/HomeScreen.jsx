import React, { useEffect, useRef } from 'react';
import HomeConfig from '../HomeConfig.json';

function HomeScreen() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      {/* Scrollable banner container */}
      <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory w-full h-96 scrollbar-hide">
        {/* Map through banners and duplicate them to create infinite scroll effect */}
        {HomeConfig.banners.concat(HomeConfig.banners).map((banner, index) => (
          <div key={index} className="relative flex-none w-full snap-center">
            <img 
              src={banner.imageUrl} 
              alt={`Banner ${banner.id}`} 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold">{banner.title}</h2>
                <p className="mt-2">{banner.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">HomeScreen</h1>
    </div>
  );
}

export default HomeScreen;
