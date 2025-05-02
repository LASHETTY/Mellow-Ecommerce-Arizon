
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-mellow-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-md mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            asChild
            className="bg-mellow-primary hover:bg-opacity-90 transition-colors"
            size="lg"
          >
            <Link to="/">
              Back to Homepage
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
