export interface Product {
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