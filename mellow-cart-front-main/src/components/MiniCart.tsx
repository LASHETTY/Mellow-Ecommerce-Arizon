
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MiniCart: React.FC = () => {
  const { items, isCartOpen, toggleCart, removeItem, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-screen w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex-grow overflow-y-auto py-4 px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={toggleCart}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex space-x-4 py-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/cart" 
                className="bg-white border border-mellow-dark text-mellow-dark px-4 py-2 text-center rounded hover:bg-gray-100 transition-colors"
                onClick={toggleCart}
              >
                View Cart
              </Link>
              <Link 
                to="/checkout" 
                className="bg-mellow-primary text-white px-4 py-2 text-center rounded hover:bg-opacity-90 transition-colors"
                onClick={toggleCart}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
