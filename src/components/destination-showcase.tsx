'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const allDestinations = [
  { name: 'NEW ZEALAND', image: 'https://images.blacktomato.com/2020/12/New-Zealand-1.jpg?auto=compress%2Cformat&fit=crop&h=1460&ixlib=php-3.3.1&q=82&w=978&s=50dd71c55f326ffdbe431283406c8691' },
  { name: 'ITALY', image: 'https://images.blacktomato.com/2021/09/Italy-2.jpg?auto=compress%2Cformat&fit=crop&h=1460&ixlib=php-3.3.1&q=82&w=978&s=1b5ff3eac654cfce6f0834889a3541a2' },
  { name: 'MOROCCO', image: 'https://images.blacktomato.com/2020/02/The-Atlas-Mountains-Morocco.jpg?auto=compress%2Cformat&fit=crop&h=1460&ixlib=php-3.3.1&q=82&w=978&s=585b61caf2262b31463aa4ae0fe92603' },
  { name: 'KENYA', image: 'https://images.blacktomato.com/2024/01/navigation-kenya.jpg?auto=compress%2Cformat&fit=crop&h=1460&ixlib=php-3.3.1&q=82&w=978&s=28568dbb9009a304be338b55ece33491' },
  { name: 'JAPAN', image: 'https://images.blacktomato.com/2022/03/Mt-Fuji-Japan-scaled.jpg?auto=compress%2Cformat&fit=crop&h=1460&ixlib=php-3.3.1&q=82&w=978&s=6222719e9585510a71a848a410c82369' },
]

const filters = ['MOST POPULAR', 'BY TRAVELLER', 'BY MONTH', 'IN THE SPOTLIGHT']

export default function DestinationShowcase() {
  const [activeFilter, setActiveFilter] = useState('MOST POPULAR')

  const getFilteredDestinations = () => {
    switch (activeFilter) {
      case 'BY TRAVELLER':
        return [...allDestinations].reverse()
      case 'BY MONTH':
        return [...allDestinations].sort((a, b) => a.name.localeCompare(b.name))
      case 'IN THE SPOTLIGHT':
        return [...allDestinations].sort(() => Math.random() - 0.5)
      default:
        return allDestinations
    }
  }

  const destinations = getFilteredDestinations()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-8">START YOUR JOURNEY</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`text-xs md:text-sm mb-2 ${
                activeFilter === filter ? 'text-black border-b-2 border-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <div key={destination.name} className="relative aspect-[3/4]">
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                <span className="text-white text-sm md:text-xl">{destination.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="#"
            className="inline-block bg-black hover:bg-gray-800 text-white text-sm py-3 px-8 transition duration-300"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  )
}