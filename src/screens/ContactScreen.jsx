import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactScreen() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)} className="border-4 border-sky-500 rounded-lg p-1 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
          Back
        </button>
      </div>
      <div>Contact Screen</div>
    </div>
  );
}

export default ContactScreen;
