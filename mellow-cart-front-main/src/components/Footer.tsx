
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mellow-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <p className="text-gray-300 mb-4">
              Mellow offers stylish, high-quality fashion items at affordable prices. Our mission is to make you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-mellow-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mellow-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-mellow-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-6">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mellow-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-l mb-2 sm:mb-0 text-mellow-dark outline-none"
              />
              <button 
                type="submit" 
                className="bg-mellow-primary hover:bg-opacity-90 transition-colors text-white px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mellow. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://via.placeholder.com/50x30" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/50x30" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/50x30" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/50x30" alt="Payment Method" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
