import Image from 'next/image'
import flower from '../../../../asset/flower.jpg'
const Banner = () => {
  return (
    <section className="relative min-h-screen bg-[#eee2db] flex items-center">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-20 mt-8 md:mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ">
        
          <div className="space-y-6">
            <h1 className="text-xl md:text-xl font-bold text-gray-900">
              THE SPACE-MANAGING
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif">
              Ikebana Vase
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Bio-based vase is crafted of the Japanese aesthetic flower arrangement in Ikebana. It is designed to honor and admire the beauty of nature, including its ephemerality.
            </p>
            <button className="bg-[#f0a485] text-white px-8 py-3 rounded-full ">
              GET YOURS NOW
            </button>
          </div>

         
          <div className="hidden lg:block relative h-96 lg:h-[600px]">
            <Image
              src={flower}
              alt="Ikebana Vase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4 text-sm text-black-600">
            <button className="hover:text-gray-900">EXPLORE →</button>
            <button className="hover:text-gray-900">TRENDS →</button>
            <button className="hover:text-gray-900">SHOP →</button>
            <button className="hover:text-gray-900">COLLECTIONS →</button>
            <button className="hover:text-gray-900">ABOUT →</button>
            <button className="hover:text-gray-900">Gift →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

