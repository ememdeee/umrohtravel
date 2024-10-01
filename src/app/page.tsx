import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import TravelSlider from '@/components/TravelSlider'
import LuxuryTravelExperts from '@/components/luxury-travel-experts'
import DestinationShowcase from '@/components/destination-showcase'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-satoshi">
      <Navbar />

      <main className="flex-grow">
        {/* Hero slider Section */}
        <TravelSlider />

        {/* Hero slider Section */}
        <LuxuryTravelExperts />

        {/* Hero slider Section */}
        <DestinationShowcase />
      </main>

      <Footer />
    </div>
  )
}