
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:py-32 bg-gradient-to-r from-mellow-light to-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Latest Fashion <span className="text-mellow-primary">Collections</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Discover the latest trends and high-quality fashion items at unbeatable prices. Explore our exclusive collection now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              asChild
              className="bg-mellow-primary hover:bg-opacity-90 transition-colors text-white px-8 py-6 text-lg rounded-full"
            >
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-mellow-dark text-mellow-dark hover:bg-mellow-dark hover:text-white transition-colors px-8 py-6 text-lg rounded-full"
            >
              <Link to="/products">
                Explore
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Fashion Model" 
            className="w-full h-auto rounded-lg shadow-xl animate-fade-in"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-mellow-primary font-semibold">New Arrivals</p>
            <p className="text-4xl font-bold">30% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
