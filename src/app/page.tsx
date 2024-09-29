import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import TravelSlider from '@/components/TravelSlider'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero slider Section */}
        <TravelSlider />
        
        {/* Featured Destinations */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Paris', 'Tokyo', 'New York'].map((city) => (
                <div key={city} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={`/placeholder.svg?height=200&width=300&text=${city}`} alt={city} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{city}</h3>
                    <p className="text-gray-600 mb-4">Experience the magic of {city} with our curated tours.</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with our latest travel deals and inspiration.</p>
            <div className="flex max-w-md mx-auto">
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}