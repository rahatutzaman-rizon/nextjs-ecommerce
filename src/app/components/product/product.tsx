"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const [productsData, setProductsData] = useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getVisibleProducts = () => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let itemsToShow = itemsPerPage.desktop;

    if (screenWidth < 640) {
      itemsToShow = itemsPerPage.mobile;
    } else if (screenWidth < 1024) {
      itemsToShow = itemsPerPage.tablet;
    }

    return productsData.slice(currentIndex, currentIndex + itemsToShow);
  };

  const nextSlide = () => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let itemsToShow = itemsPerPage.desktop;

    if (screenWidth < 640) {
      itemsToShow = itemsPerPage.mobile;
    } else if (screenWidth < 1024) {
      itemsToShow = itemsPerPage.tablet;
    }

    setCurrentIndex(prev => 
      prev + itemsToShow >= productsData.length ? 0 : prev + itemsToShow
    );
  };


  const prevSlide =()=>{
    const screenWidth =typeof window! =='undefined '? window.innerWidth :0;
    let itemsToShow =itemsPerPage.desktop;
    if (screenWidth< 640 ){
      itemsToShow=itemsPerPage.desktop;
      
    }
    else if (screenWidth < 1024)
    {
     itemsToShow=itemsPerPage.tablet;
    }

    setCurrentIndex(prev => prev -itemsToShow < 0 ? productsData.length -itemsToShow: prev-itemsToShow);

  };


  return (
    <div className="min-h-screen bg-white">
      <header className="py-8 text-center border-b">
        <h1 className="text-3xl font-light tracking-wider">NEW ONLINE</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="relative mx-8 lg:mx-24">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-4 rounded-full bg-gray-100 hover:bg-rose-400 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous products</span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {getVisibleProducts().map((product: Product) => (
              <div key={product.id} className="group transition-all duration-300 hover:shadow-lg p-4 rounded-lg">
                <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 className="text-lg font-medium mb-1 truncate">{product.title}</h2>
                <p className="text-sm text-gray-500 uppercase mb-2">{product.category}</p>
                <p className="text-lg">€ {product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-4 rounded-full bg-gray-100 hover:bg-rose-300 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next products</span>
          </button>
        </div>
      </main>

      <div className="mt-8 text-center">
        <Link href="/product">
          <button className="bg-[#f0a485] text-white px-8 py-3 rounded-full hover:bg-[#e89474] transition-colors">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSlider;