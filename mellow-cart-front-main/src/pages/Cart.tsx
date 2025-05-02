
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2 } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  // Calculate shipping cost (free over $50, otherwise $10)
  const shippingCost = subtotal > 50 ? 0 : 10;
  
  // Calculate total cost
  const totalCost = subtotal + shippingCost;

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl mb-8">Your cart is empty</p>
              <Button 
                asChild
                className="bg-mellow-primary hover:bg-opacity-90 transition-colors"
              >
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="hidden md:grid grid-cols-5 gap-4 mb-4 pb-4 border-b">
                    <div className="col-span-2">
                      <h2 className="font-semibold">Product</h2>
                    </div>
                    <div>
                      <h2 className="font-semibold">Price</h2>
                    </div>
                    <div>
                      <h2 className="font-semibold">Quantity</h2>
                    </div>
                    <div>
                      <h2 className="font-semibold">Total</h2>
                    </div>
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b items-center">
                      <div className="md:col-span-2 flex items-center">
                        <div className="w-20 h-20 mr-4">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium line-clamp-2">{item.title}</h3>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeItem(item.id)}
                            className="text-mellow-primary p-0 h-auto mt-2"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            <span className="text-sm">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div>
                        <div className="flex items-center border rounded-md max-w-[120px]">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-2 w-10 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-mellow-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shippingCost === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `$${shippingCost.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${totalCost.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button 
                      className="w-full bg-mellow-primary hover:bg-opacity-90 transition-colors" 
                      size="lg"
                      asChild
                    >
                      <Link to="/checkout">
                        Proceed to Checkout
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-medium mb-4">Have a promo code?</h3>
                  <div className="flex">
                    <Input placeholder="Enter promo code" className="mr-2" />
                    <Button>Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;

// Input component since we're using it in the page
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mellow-primary ${className}`}
      {...props}
    />
  );
};
