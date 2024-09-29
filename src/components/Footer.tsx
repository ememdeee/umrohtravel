import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Poetry Travel is your gateway to extraordinary journeys and unforgettable experiences around the world.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:underline">Destinations</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Experiences</Link></li>
              <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Travel Street, Adventure City, 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@poetrytravel.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400"><Facebook /></Link>
              <Link href="#" className="hover:text-blue-400"><Twitter /></Link>
              <Link href="#" className="hover:text-blue-400"><Instagram /></Link>
              <Link href="#" className="hover:text-blue-400"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Poetry Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}