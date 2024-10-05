import React, { useEffect, useState } from 'react';

const Banner = ({ banner, isActive }) => {
  const [typedDescription, setTypedDescription] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing animation effect for the description
  useEffect(() => {
    if (isActive) {
      setTypedDescription(''); // Reset description when the banner becomes active
      setTypingIndex(0);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && typingIndex < banner.description.length) {
      const typingTimeout = setTimeout(() => {
        setTypedDescription((prev) => prev + banner.description[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Speed of typing (100ms delay between characters)
      return () => clearTimeout(typingTimeout);
    }
  }, [isActive, typingIndex, banner.description]);

  return (
    <div className="relative flex-none w-full snap-center">
      <img
        src={banner.imageUrl}
        alt={`Banner ${banner.id}`}
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
      {/* Overlay Layer */}
      {isActive && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold">{banner.title}</h2>
            <p className="mt-2 text-3xl font-bold">{typedDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
