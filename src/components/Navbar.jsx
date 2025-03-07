import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaRegLaughBeam, FaFeatherAlt, FaGlobeAmericas } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showJoke, setShowJoke] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const jokes = [
    "Why did the developer go broke? Because he used up all his cache!",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    "Why did the functions stop calling each other? They had too many arguments!",
  ];
  
  const handleLogoClick = (e) => {
    // Only show joke if we're already on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setShowJoke(randomJoke);
      
      setTimeout(() => {
        setShowJoke(false);
      }, 3000);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-background py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="relative">
            <Link to="/" className="text-2xl font-bold text-primary font-handwriting group" onClick={handleLogoClick}>
              My <span className="text-secondary group-hover:animate-bounce inline-block">Website</span>
              <FaRegLaughBeam className="inline-block ml-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            {showJoke && (
              <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded shadow-md text-sm max-w-xs z-50">
                <p>{showJoke}</p>
                <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Me</Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
            
            <Link to="/musings" className={`nav-link ${isActive('/musings') ? 'active' : ''}`}>
              Musings
              <FaFeatherAlt className="inline-block ml-1 text-xs text-primary" />
            </Link>
            <Link to="/secret" className={`nav-link ${isActive('/secret') ? 'active' : ''}`}>
              Secret
              <span className="ml-1 text-xs text-secondary animate-pulse">👀</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-dark focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden transition-all duration-300 opacity-100 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={toggleMenu}>About Me</Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={toggleMenu}>Portfolio</Link>
            <Link to="/musings" className={`nav-link ${isActive('/musings') ? 'active' : ''}`} onClick={toggleMenu}>
              Musings <FaFeatherAlt className="inline-block ml-1 text-xs text-primary" />
            </Link>
            <Link to="/secret" className={`nav-link ${isActive('/secret') ? 'active' : ''}`} onClick={toggleMenu}> Secret👀 </Link>
          </div>
        </div>
      )}

      </div>
    </header>
  );
};

export default Navbar;