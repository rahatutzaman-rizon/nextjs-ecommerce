'use client';


import { useEffect, useState } from 'react';
import Loading from '../components/reusable/loading';
import Error from '../components/reusable/error';
import ProductCard, { Product } from '../components/reusable/ProductCard';
import { getData } from '../utils/http-client.service';
import { PRODUCTS } from '../utils/endpoints';




export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getData(PRODUCTS);
        setProducts(data);
      } catch (err) {
        // setError(err instanceof Error ? err?.message : 'An error occurred');
        if(err instanceof Error)
            console.log(err);
        setError('An error occured')
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
