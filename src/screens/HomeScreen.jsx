import React, { useEffect, useRef } from 'react';
import HomeConfig from '../HomeConfig.json'; // Import the JSON file

function HomeScreen() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
        
        // If we've reached the end, scroll back to the start seamlessly
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to the right by the width of one banner
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the interval (3000ms = 3 seconds)

    return () => clearInterval(scrollInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      {/* Scrollable banner container */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-96 scrollbar-hide"
      >
        {/* Map through banners and duplicate them to create infinite scroll effect */}
        {HomeConfig.banners.concat(HomeConfig.banners).map((banner, index) => (
          <div key={index} className="flex-none w-full snap-center">
            <img 
              src={banner.imageUrl} 
              alt={`Banner ${banner.id}`} 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">HomeScreen</h1>
    </div>
  );
}

export default HomeScreen;
