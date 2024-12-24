import { SINGLE_PRODUCT } from "./endpoints";

export const getData = async (endpoint: string) => {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Something went wrong!');
    }
  };



export const getSingleProduct = async (id : string) =>{
 const endpoint = SINGLE_PRODUCT(id)

 return await getData(endpoint)
}