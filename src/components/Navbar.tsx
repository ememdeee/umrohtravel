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

const menuItems = [
  { name: 'Month', items: [
    { name: 'January', image: 'https://images.blacktomato.com/2023/12/Months_january.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=72a48b13afdf3f06fc80aec27367e502', href: '#january' },
    { name: 'February', image: 'https://images.blacktomato.com/2023/12/Months_february.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=1c485a4e0292bf35d7db6cddd2be865a', href: '#february' },
    { name: 'March', image: 'https://images.blacktomato.com/2023/12/Months_march.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=112090aed6b0b8e3bf0db94a12cd22e8', href: '#march' },
    { name: 'July', image: 'https://images.blacktomato.com/2023/12/Months_july.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=4952bd1c988d3e65a017d370eed17eb7', href: '#july' },
    { name: 'September', image: 'https://images.blacktomato.com/2023/12/Months_september.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=15245da1b9fdbd074e1f31361356fe0c', href: '#september' },
    { name: 'October', image: 'https://images.blacktomato.com/2023/12/Months_october.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=31a1cabe5396b3ac6ee32c9727ac228f', href: '#october' },
    { name: 'November', image: 'https://images.blacktomato.com/2023/12/Months_november.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=2166b1ee7842c0e124711028e3cf10e0', href: '#november' },
    { name: 'December', image: 'https://images.blacktomato.com/2023/12/Months_december.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=936c9d425451155e71ddac3768b4d593', href: '#december' },
  ]},
  { name: 'Inspiration', items: [
    { name: 'Indulge', image: 'https://images.blacktomato.com/2023/12/plates.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=cf443abf38f2e28f825d295b1217cc73', href: '#indulge' },
    { name: 'Unwind', image: 'https://images.blacktomato.com/2024/02/Atlas-mountains-morocco-landscape.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=3f54b9afa34da7798be55883eb31d762', href: '#unwind' },
    { name: 'Learn', image: 'https://images.blacktomato.com/2023/12/Trip-FinderLearn.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=fc2f9b46ca488b1732f15ea46a39c14d', href: '#learn' },
    { name: 'Discover', image: 'https://images.blacktomato.com/2023/12/Trip-Finderdiscover.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=ed17b2990edd07eaa5ddebb42483d19a', href: '#discover' },
    { name: 'Challenge', image: 'https://images.blacktomato.com/2023/12/Trip-Finderchallenge.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=2528eae32d692c6b3f8ac064be3113e7', href: '#challenge' },
  ]},
  { name: 'Trip finder', items: [
    { name: 'Italy', image: 'https://images.blacktomato.com/2024/01/navigation-italy.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=726949beabd3e945175f79b16d675d93', href: '#italy' },
    { name: 'Japan', image: 'https://images.blacktomato.com/2024/01/navigation-japan.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=792888a39d0094dd4ffafe250414084c', href: '#japan' },
    { name: 'Morocco', image: 'https://images.blacktomato.com/2024/01/navigation-morocco.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=9c6cc9979ca90b59860ca25263d36048', href: '#morocco' },
    { name: 'India', image: 'https://images.blacktomato.com/2024/01/navigation-india.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=cb6eb3321c13cbfa3dd8beb50c8816b0', href: '#india' },
    { name: 'Iceland', image: 'https://images.blacktomato.com/2024/01/navigation-iceland.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=78ccd6f36fb04797bda46715add21e01', href: '#iceland' },
    { name: 'Kenya', image: 'https://images.blacktomato.com/2024/01/navigation-kenya.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=f2de2eb24ec34b74cfbd49cdd3e467ed', href: '#kenya' },
    { name: 'Peru', image: 'https://images.blacktomato.com/2024/01/navigation-peru.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=93ce56e4dbb7d8a43ce035c527ae1f7d', href: '#peru' },
    { name: 'Argentina', image: 'https://images.blacktomato.com/2024/01/navigation-argentina.jpg?auto=compress%2Cformat&fit=crop&h=370&ixlib=php-3.3.1&q=82&w=220&s=a7a3993adb60830c173d49668118ddd1', href: '#argentina' },
  ]},
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState('Month')

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
                className={`text-md font-medium hover:text-orange-300 transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
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
              <SheetContent side="top" className="w-full h-screen bg-white p-0 overflow-y-auto">
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
                          className="text-md text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-gray-700">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                      <span className="text-sm text-gray-700">+62 851 5533 4644</span>
                      <User className="h-5 w-5 text-gray-700 cursor-pointer" />
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2">
                        Start planning
                      </Button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/4 pr-4">
                      <ul className="space-y-2">
                        {menuItems.map((item) => (
                          <li
                            key={item.name}
                            className={`cursor-pointer ${activeMenuItem === item.name ? 'font-medium text-orange-500' : 'text-gray-700'}`}
                            onClick={() => setActiveMenuItem(item.name)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-3/4 grid grid-cols-4 gap-4">
                      {menuItems.find(item => item.name === activeMenuItem)?.items.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="block">
                          <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                            <Image src={subItem.image} alt={subItem.name} layout="fill" objectFit="cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2">
                              <span className="text-white font-medium">{subItem.name}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <span className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>+62 851 5533 4644</span>
            <User className={`h-5 w-5 cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 shadow-md">
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
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <div className="space-y-4 p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href="#"
                        className="block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="#"
                      className="block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My BT
                    </Link>
                  </div>
                  <div className="mt-auto p-4 border-t">
                    <p className="text-sm font-medium text-gray-700">+62 851 5533 4644</p>
                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium shadow-md">
                      Start planning
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 shadow-md">
              Start planning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}