import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0A2540] to-[#051628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_falcon-connect/artifacts/31xyo2l8_WhatsApp%20Image%202026-02-13%20at%2011.42.01.jpeg" 
                alt="Falcon Ride" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">
                Falcon<span className="text-[#4A90A4]">Ride</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reliable local rides when you need them. Safe, fast, and affordable transportation across Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/driver-registration" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  Driver Signup
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="text-[#4A90A4] flex-shrink-0 mt-1" size={18} />
                <a href="mailto:admin@falconride.ca" className="text-gray-300 hover:text-[#4A90A4] transition-colors duration-200 text-sm">
                  admin@falconride.ca
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#4A90A4] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300 text-sm">
                  Serving across Canada
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-[#D4AF37]">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-[#4A90A4] transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-[#4A90A4] transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-[#4A90A4] transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Falcon Ride. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ in Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
