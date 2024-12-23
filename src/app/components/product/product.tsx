import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default async function Product() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-white">
      <header className="py-8 text-center border-b">
        <h1 className="text-3xl font-light tracking-wider">NEW ONLINE</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="relative ml-24 mr-24">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 p-4 rounded-full bg-gray-100 hover:bg-rose-400 transition-colors">
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous products</span>
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 hover:opacity-0.2  ">
            {products.slice(16, 22).map((product: Product) => (
              <div key={product.id} className="group">
                <div className="aspect-square relative mb-4 bg-gray-50">
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

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 p-4 rounded-full bg-gray-100 hover:bg-rose-300 transition-colors">
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next products</span>
          </button>
        </div>
      </main>
         <div className='mt-4 text-center'>
            <Link href="/product">
            <button className="bg-[#f0a485] text-white px-8 py-3 rounded-full ">
              GET All Product
            </button>
            </Link>
         </div>
      
    </div>
  )
}

