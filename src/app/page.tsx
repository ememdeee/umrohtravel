import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=700&width=1200')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Adventure</h1>
              <p className="text-xl mb-8">Explore the world with Poetry Travel</p>
              <Button className="bg-white text-black hover:bg-gray-200">Start Your Journey</Button>
            </div>
          </div>
        </section>

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
              <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}