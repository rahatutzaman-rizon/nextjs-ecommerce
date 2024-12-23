'use client';

import Image from 'next/image';
import Link from 'next/link';

export  interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-xl font-bold text-teal-600 capitalize">
            {product.category}
          </span>
        </div>
        <Link
          href={`/product/${product.id}`}
          className="block w-full text-center bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
