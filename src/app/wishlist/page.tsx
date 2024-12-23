"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2, BookmarkIcon, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function WishList() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Floating Notification */}
      {showNotification && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
          Item added to cart successfully!
        </div>
      )}

      {/* Header with navigation */}
      <nav className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 backdrop-blur-md bg-opacity-90 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </Link>
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {wishlist.length} items
                </span>
              </div>
            </div>
            <Link 
              href="/cart" 
              className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">View Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm py-20 px-4">
            <div className="bg-gray-50 p-6 rounded-full mb-6">
              <BookmarkIcon className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-3">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Items added to your wishlist will appear here</p>
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64">
                  {product.image && (
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-500 rounded-full p-2 hover:bg-red-50 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-2">
                      {product.category}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h2>
                  </div>
                  
                  <div className="flex items-baseline justify-between mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                      <span className="ml-2 text-sm text-gray-500">USD</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="font-medium">Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}