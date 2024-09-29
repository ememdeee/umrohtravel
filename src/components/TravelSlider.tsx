"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

interface SlideProps {
  imageUrl: string
  headingText: string
  paragraphText: string
  buttonText: string
  buttonLink: string
}

const slides: SlideProps[] = [
  {
    imageUrl: '/placeholder.svg?height=900&width=1600&text=Umroh',
    headingText: 'Travel Umroh & Haji Khusus Sesuai Sunnah',
    paragraphText: 'Explore the world with Poetry Travel',
    buttonText: 'Start Your Journey',
    buttonLink: '/journey'
  },
  {
    imageUrl: '/placeholder.svg?height=900&width=1600&text=Sacred+Places',
    headingText: 'Discover Sacred Places',
    paragraphText: 'Experience spiritual journeys like never before',
    buttonText: 'Learn More',
    buttonLink: '/discover'
  },
  {
    imageUrl: '/placeholder.svg?height=900&width=1600&text=Pilgrimage',
    headingText: 'Personalized Pilgrimage',
    paragraphText: 'Tailored experiences for your spiritual growth',
    buttonText: 'Plan Your Trip',
    buttonLink: '/plan'
  }
]

const Slide: React.FC<SlideProps> = ({ imageUrl, headingText, paragraphText, buttonText, buttonLink }) => {
  return (
    <section className="relative h-[90vh] bg-cover bg-center" style={{backgroundImage: `url('${imageUrl}')`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            {headingText}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">
            {paragraphText}
          </p>
          <Button 
            variant="outline" 
            className="px-6 py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function TravelSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden w-full h-[90vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Slide {...slide} />
        </div>
      ))}
    </div>
  )
}