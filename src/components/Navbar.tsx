"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, User, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Destinations', href: '#' },
  { name: 'Experiences', href: '#' },
  { name: 'About', href: '#' },
]

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`} id='navigationBar'>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={isScrolled ? "/umroh-travel-black.svg" : "/umroh-travel-white.svg"}
              alt="Umroh Travel Logo"
              width={120}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Search className={`h-5 w-5 cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-md font-satoshi font-medium hover:text-orange-300 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
            <Sheet open={isDesktopMenuOpen} onOpenChange={setIsDesktopMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-700' : 'text-white'}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen bg-white p-0">
                <div className="container mx-auto px-4 py-3">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center space-x-2">
                      <Image 
                        src="/umroh-travel-black.svg"
                        alt="Umroh Travel Logo"
                        width={120}
                        height={24}
                        className="h-6 w-auto"
                      />
                    </Link>
                    <div className="flex items-center space-x-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-md font-satoshi font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-gray-700">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                      <span className="text-sm font-satoshi text-gray-700">+62 851 5533 4644</span>
                      <User className="h-5 w-5 text-gray-700 cursor-pointer" />
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-satoshi font-medium px-4 py-2">
                        Start planning
                      </Button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/4 pr-4">
                      <ul className="space-y-2 font-satoshi">
                        <li className="font-medium text-orange-500">Month</li>
                        <li>Inspiration</li>
                        <li>Trip finder</li>
                        <li>Most popular</li>
                      </ul>
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-4">
                      {months.map((month) => (
                        <div key={month} className="relative">
                          <img src={`/placeholder.svg?height=200&width=300&text=${month}`} alt={month} className="w-full h-48 object-cover" />
                          <span className="absolute bottom-2 left-2 text-white font-satoshi font-medium">{month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <span className={`text-sm font-satoshi ${isScrolled ? 'text-gray-700' : 'text-white'}`}>+62 851 5533 4644</span>
            <User className={`h-5 w-5 cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-satoshi font-medium px-4 py-2 shadow-md">
              Start planning
            </Button>
          </div>
          <div className="flex lg:hidden items-center space-x-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-700' : 'text-white'}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px] bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Image 
                      src="/umroh-travel-black.svg"
                      alt="Umroh Travel Logo"
                      width={120}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-gray-700">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="p-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full p-2 border border-gray-300 rounded-md text-sm font-satoshi"
                    />
                  </div>
                  <div className="space-y-4 p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm font-satoshi font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="#"
                      className="block text-sm font-satoshi font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Inspiration
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm font-satoshi font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My BT
                    </Link>
                  </div>
                  <div className="mt-auto p-4 border-t">
                    <p className="text-sm font-satoshi font-medium text-gray-700">+62 851 5533 4644</p>
                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-satoshi font-medium shadow-md">
                      Start planning
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-satoshi font-medium px-4 py-2 shadow-md">
              Start planning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}