import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram } from "react-icons/ti"
// import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutubeCircular } from "react-icons/ti";
// import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // State to manage the visibility of the login and account forms
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAccountForm, setShowAccountForm] = useState(false);
  
  const loginFormRef = useRef(null);
  const accountFormRef = useRef(null); // Ref for the account form
  const userIconRef = useRef(null);  // Ref for the FaUserCircle icon

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !loginFormRef.current?.contains(event.target) &&
        !accountFormRef.current?.contains(event.target) &&
        !userIconRef.current?.contains(event.target)
      ) {
        setShowLoginForm(false);
        setShowAccountForm(false);
      }
    };

    if (showLoginForm || showAccountForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLoginForm, showAccountForm]);

  return (
    <>
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="md:w-6/12 mb-6 md:mb-0">
              <h6 className="text-lg font-semibold mb-2">About Us</h6>
              <p className="text-sm">
                We are a leading provider of high-quality pipes for industrial, residential, and commercial applications. Our goal is to supply durable and reliable piping solutions to ensure smooth operations across various industries, with a focus on customer satisfaction and timely delivery.
              </p>
            </div>
            <div className="md:w-2/12 mb-6 md:mb-0">
              <h6 className="text-lg font-semibold mb-2">Contact Us</h6>
              <p className="text-sm">Email: support@pipecompany.com</p>
              <p className="text-sm">Phone: +1 (234) 567-8900</p>
            </div>
            <div className="md:w-1/12 mb-6 md:mb-0">
              <h6 className="text-lg font-semibold mb-2">Quick Links</h6>
              <ul className="list-none space-y-1">
                <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
                <li><Link to="/about" className="text-sm hover:underline">About</Link></li>
                <li><Link to="/product" className="text-sm hover:underline">Product</Link></li>
                <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="md:w-1/12 mb-6 md:mb-0 mr-8">
              <h6 className="text-lg font-semibold mb-2">Follow Us</h6>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* <a href="https://www.facebook.com/pipecompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                  <TiSocialFacebook size={24} />
                </a> */}
                <a href="https://www.instagram.com/pipecompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                  <TiSocialInstagram size={24} />
                </a>
                {/* <a href="https://www.youtube.com/pipecompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
                  <TiSocialYoutubeCircular size={24} />
                </a> */}
                {/* <a href="https://twitter.com/pipecompany" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                  <FaSquareXTwitter size={24} />
                </a> */}
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
          <p className="text-center text-sm">&copy; {currentYear} Pipe Company</p>
        </div>
      </footer>
    </>
  );
}
