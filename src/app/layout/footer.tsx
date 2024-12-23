import { 
    Facebook, 
    Instagram, 
    PinIcon as Pinterest, 
    Twitter,
    CreditCard,
    Wallet,
    
    CreditCardIcon,
    
    BanknoteIcon,
    CoinsIcon,
    Banknote
  } from 'lucide-react'
  import Link from "next/link"
  
  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="px-4 py-12 mx-auto ml-24">
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            {/* Customer Service */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Contact</Link>
                  <Link href="#" className="block text-sm hover:underline">Delivery & Times</Link>
                  <Link href="#" className="block text-sm hover:underline">Warranty & Repair</Link>
                  <Link href="#" className="block text-sm hover:underline">Order pay</Link>
                </div>
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Own delivery service</Link>
                  <Link href="#" className="block text-sm hover:underline">Returns</Link>
                  <Link href="#" className="block text-sm hover:underline">Order business</Link>
                  <Link href="#" className="block text-sm hover:underline">Privacy Statement</Link>
                </div>
              </div>
            </div>
  
            {/* MisterDesign */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">MisterDesign</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Shop Den Bosch</Link>
                  <Link href="#" className="block text-sm hover:underline">Interior advice</Link>
                  <Link href="#" className="block text-sm hover:underline">Projects</Link>
                  <Link href="#" className="block text-sm hover:underline">Vacancies</Link>
                </div>
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Terms and Conditions</Link>
                  <Link href="#" className="block text-sm hover:underline">Blog</Link>
                  <Link href="#" className="block text-sm hover:underline">Trends</Link>
                  <Link href="#" className="block text-sm hover:underline">Actions & offers</Link>
                </div>
              </div>
            </div>
  
            {/* Keep in touch */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Keep in touch!</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Pinterest className="w-6 h-6" />
                  <span className="sr-only">Pinterest</span>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Bottom Grid */}
          <div className="grid grid-cols-1 gap-8 pt-8 border-t md:grid-cols-3">
            {/* Popular Categories */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Chairs</Link>
                  <Link href="#" className="block text-sm hover:underline">Furniture</Link>
                  <Link href="#" className="block text-sm hover:underline">Lighting</Link>
                  <Link href="#" className="block text-sm hover:underline">Accessories</Link>
                </div>
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Garden</Link>
                  <Link href="#" className="block text-sm hover:underline">Tables</Link>
                  <Link href="#" className="block text-sm hover:underline">Childrens room</Link>
                  <Link href="#" className="block text-sm hover:underline">Cabinets</Link>
                </div>
              </div>
            </div>
  
            {/* Popular Brands */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Brands</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Kartell</Link>
                  <Link href="#" className="block text-sm hover:underline">Ferm Living</Link>
                  <Link href="#" className="block text-sm hover:underline">HAY</Link>
                  <Link href="#" className="block text-sm hover:underline">Muuto</Link>
                </div>
                <div className="space-y-2">
                  <Link href="#" className="block text-sm hover:underline">Carl Hansen</Link>
                  <Link href="#" className="block text-sm hover:underline">Tom Dixon</Link>
                  <Link href="#" className="block text-sm hover:underline">Fritz Hansen</Link>
                  <Link href="#" className="block text-sm hover:underline">Vitra</Link>
                </div>
              </div>
            </div>
  
            {/* Payment Methods */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Payment Methods</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center justify-center">
                  <CreditCard className="w-12 h-8" />
                  <span className="sr-only">Visa</span>
                </div>
                <div className="flex items-center justify-center">
                  <CreditCardIcon className="w-12 h-8" />
                  <span className="sr-only">Mastercard</span>
                </div>
                <div className="flex items-center justify-center">
                  <CoinsIcon className="w-12 h-8" />
                  <span className="sr-only">PayPal</span>
                </div>
                <div className="flex items-center justify-center">
                  <Wallet className="w-12 h-8" />
                  <span className="sr-only">Maestro</span>
                </div>
                <div className="flex items-center justify-center">
                  <Banknote className="w-12 h-8" />
                  <span className="sr-only">iDEAL</span>
                </div>
                <div className="flex items-center justify-center">
                  <BanknoteIcon className="w-12 h-8" />
                  <span className="sr-only">Klarna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright Bar */}
        <div className="py-4 text-sm text-center text-white bg-zinc-800">
          <div className="container flex flex-col justify-between gap-2 px-4 md:flex-row">
            <p className="ml-12">© 2010 - 2018 MisterDesign Hertogenbosch</p>
            <p>All rights reserved</p>
            <p className="mr-4">All prices include VAT</p>
          </div>
        </div>
      </footer>
    )
  }