const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}


export const fetchProductData = async (id: number) => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`);
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Something went wrong!');
    }
  };

  