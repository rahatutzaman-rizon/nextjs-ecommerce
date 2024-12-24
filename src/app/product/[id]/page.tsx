"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Heart, ShoppingCart, ChevronLeft, Star, X } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

import Loading from '@/app/components/reusable/loading';
import Error from '@/app/components/reusable/error';
import { getSingleProduct } from '@/app/utils/http-client.service';


interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  message:string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setIsInCart(cartItems.some((item: CartItem) => item.id === Number(params.id)));

    const wishlistItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlistItems.some((item: Product) => item.id === Number(params.id)));

    const loadProduct = async () => {
      try {
        const data = await getSingleProduct(String(params.id));
        setProduct(data);
      } catch (err) {
         if(err instanceof Error)
                    console.log(err);


      } finally {
        setLoading(false);
      }
    };

    if (params.id) loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += quantity;
      toast.success(`Updated ${product.title} quantity in cart`);
    } else {
      cartItems.push({ ...product, quantity });
      toast.success(`Added ${product.title} to cart`);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    setIsInCart(true);
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    const wishlistItems: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isItemInWishlist = wishlistItems.some(item => item.id === product.id);

    if (isItemInWishlist) {
      const updatedWishlist = wishlistItems.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      toast.success(`Removed ${product.title} from wishlist`);
    } else {
      wishlistItems.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      setIsInWishlist(true);
      toast.success(`Added ${product.title} to wishlist`);
    }
  };

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (error || !product) {
    return (
        <Error message={error} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/product"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="max-h-[400px] max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold capitalize">
                    {product.category}
                  </span>
                </div>
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-full transition-all ${isInWishlist ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  <Heart className="w-6 h-6" fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < Math.floor(product.rating.rate) ? '#FFB800' : '#E5E7EB'}
                      color={i < Math.floor(product.rating.rate) ? '#FFB800' : '#E5E7EB'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.rating.count} reviews)</span>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <div className="flex items-center border rounded-lg bg-white">
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span className="w-12 text-center border-x py-2">{quantity}</span>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 py-3 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:shadow-lg active:transform active:scale-[0.98]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
