import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const handleHeartClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 3) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
    }
  };

  return (
    <footer className="bg-dark text-white py-8 relative">
      {showEasterEgg && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse"></div>
      )}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-handwriting">
              Connect with me
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {currentYear} My Personal Website. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">
              Made with <FaHeart className="inline text-red-500 hover:scale-125 transition-transform cursor-pointer" onClick={handleHeartClick} /> in Davao City, Philippines
              {showEasterEgg && <span className="ml-2 animate-bounce inline-block">🎉</span>}
            </p>
            {showEasterEgg && (
              <p className="text-xs text-primary mt-2 animate-pulse">Easter egg found! You're awesome!</p>
            )}
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>This site contains approximately 17 hidden easter eggs. You've found {clickCount >= 3 ? '1' : '0'} so far. Happy hunting!</p>
          <p className="mt-1">Disclaimer: There may or may not actually be 17 easter eggs. I lost count.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;