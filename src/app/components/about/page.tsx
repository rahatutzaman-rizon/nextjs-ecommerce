import Image from 'next/image'
import t1 from '../../../../asset/t1.jpg'
import t2 from '../../../../asset/t2.jpg'


export default function AboutUs() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* About Us Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Our interior consultants are happy to help you! By phone, in our store or even
            on location.
          </p>
        </div>

        {/* Every Project Column */}
        <div className="space-y-6">
          <div className="aspect-[4/3] relative mb-6">
            <Image
              src={t1}
              alt="Interior consultants"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h2 className="text-4xl font-light">Every Project is Different</h2>
          <p className="text-gray-600 leading-relaxed">
            Our interior consultants are happy to help you. By phone, in our store or even on
            location. We offer free interior design advice in our store and in your home.
          </p>
          <div className="pt-4">
            <button className=''>Our Projects</button>
          </div>
        </div>

        {/* Web Shop Column */}
        <div className="space-y-6">
          <div className="aspect-[4/3] relative mb-6">
            <Image
              src={t2}
              alt="Our team"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h2 className="text-4xl font-light"> Web Shop</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2010 MisterDesign started with the sale of design furniture, lighting and accessories.
            Eight years later, we have more than 100,000 satisfied customers.
          </p>
          <div className="pt-4">
            <button>Our Projects</button>
          </div>
        </div>
      </div>
    </main>
  )
}

