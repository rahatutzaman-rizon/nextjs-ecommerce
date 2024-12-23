"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, User, Heart, Home } from "lucide-react";

const Navbar: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  useEffect(() => {
    // Fetch cart count from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cartItems.length);

    // Fetch wishlist count from local storage
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(wishlistItems.length);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-30 opacity-1 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center">
            <Link href="/" className="text-sm md:text-xl font-semibold">
              <div className="flex items-center justify-center">
                <Home className="w-12 h-8" />
                <span className="">Home</span>
              </div>
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Link href="/search" className="p-2 hover:bg-gray-100 rounded-full">
              <div className="flex gap-1 items-center">
                <h1>Search</h1>
                <Search className="h-5 w-5" />
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-xl relative">
              <div className="flex gap-1 items-center">
                <h1>Wishlist</h1>
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Product */}
            <Link href="/product" className="p-2 hover:bg-gray-100 rounded-full">
              <div className="flex gap-1 items-center">
                <h1>Product</h1>
                <User className="h-5 w-5" />
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <div className="flex gap-1 items-center">
                <h1>Cart</h1>
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
