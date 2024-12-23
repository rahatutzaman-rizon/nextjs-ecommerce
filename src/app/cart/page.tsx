// pages/cart.tsx

"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';



interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  const calculateTotal = (items: Product[]) => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    toast.success('Item removed from cart');
  };

  const moveToWishlist = (product: Product) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    localStorage.setItem('wishlist', JSON.stringify([...existingWishlist, product]));
    removeFromCart(product.id);
    toast.success('Item moved to wishlist');
  };

 

  const checkout = () => {
    toast.success('Successfully Proceeded to Checkout');
    setTimeout(() => {
      
    }, 2000);
    router.push("/"); // Delay for toast to show
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Link href="/wishlist" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Go to Wishlist
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 transition-all transform hover:scale-105">
                <div className="flex-1 flex flex-col items-center">
                  {/* <Image src={product.image} alt={product.name}  fill className="w-32 h-32 object-cover rounded-lg shadow-md mb-4" /> */}
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-black font-bold text-lg mt-2">{product.category}</p>
                  <p className="text-xl font-bold text-gray-900 mt-4">${product.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => moveToWishlist(product)}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Move to Wishlist
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Total</h2>
                <p className="text-3xl font-bold text-indigo-600">${total.toFixed(2)}</p>
              </div>
              <button
                onClick={checkout}
                className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
