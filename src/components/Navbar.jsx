import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Driver Registration', path: '/driver-registration' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_falcon-connect/artifacts/31xyo2l8_WhatsApp%20Image%202026-02-13%20at%2011.42.01.jpeg" 
              alt="Falcon Ride Logo" 
              className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-[#4A90A4] shrink-0"
            />
            <span className="text-lg sm:text-2xl font-bold text-[#0A2540] tracking-tight truncate">
              Falcon<span className="text-[#4A90A4]">Ride</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#4A90A4] bg-[#4A90A4]/10'
                    : 'text-gray-700 hover:text-[#4A90A4] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/driver-registration">
              <Button 
                variant="outline" 
                className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white transition-all duration-300"
              >
                Become a Driver
              </Button>
            </Link>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-[#0A2540] to-[#4A90A4] hover:from-[#4A90A4] hover:to-[#0A2540] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#4A90A4] bg-[#4A90A4]/10'
                    : 'text-gray-700 hover:text-[#4A90A4] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/driver-registration" className="block">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a Driver
                </Button>
              </Link>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  className="w-full bg-gradient-to-r from-[#0A2540] to-[#4A90A4] text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download App
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
