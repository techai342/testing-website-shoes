import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass-morphism mt-20 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Back to Streets" className="h-8 w-8 mr-3" />
              <span className="text-white text-xl font-bold">Back to Streets</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your ultimate destination for premium sneakers and streetwear. Find the latest drops and classic styles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Trending</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">On Sale</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">School Shoes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Joggers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Jordans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Running</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get notified about new drops and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="btn-primary rounded-l-none px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Back to Streets. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
