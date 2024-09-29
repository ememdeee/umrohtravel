"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Menu, Compass } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Destinations', href: '#' },
  { name: 'Experiences', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Compass className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-orange-700">Umroh Travel</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2 border-orange-500 text-orange-700 hover:bg-orange-100">
              <MessageCircle className="h-4 w-4" />
              <span>Contact Us</span>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px] bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                      className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Compass className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="text-xl font-bold text-orange-700">Umroh Travel</span>
                  </Link>
                  </div>
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <motion.div key={item.name} whileHover={{ x: 5 }}>
                        <Link
                          href={item.href}
                          className="block text-gray-700 hover:text-orange-500 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full mt-6 flex items-center justify-center space-x-2 border-orange-500 text-orange-700 hover:bg-orange-100">
                      <MessageCircle className="h-4 w-4" />
                      <span>Contact Us</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}