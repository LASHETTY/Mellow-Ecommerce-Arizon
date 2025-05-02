
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.title.substring(0, 30)}... has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-mellow-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending items that combine style, quality, and value.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mellow-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-grow transition-all duration-300">
                <Link to={`/products/${product.id}`}>
                  <div className="h-64 flex items-center justify-center p-4 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12">
                      {product.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-mellow-primary font-bold">${product.price.toFixed(2)}</p>
                    <Button 
                      size="sm" 
                      className="bg-mellow-primary hover:bg-opacity-90 transition-colors rounded-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-mellow-primary hover:bg-opacity-90 transition-colors text-white px-6 py-5 rounded-full"
          >
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
