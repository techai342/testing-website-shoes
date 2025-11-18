import React, { useState } from 'react'
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="glass-morphism sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Back to Streets" className="h-8 w-8 mr-3" />
              <span className="text-white text-xl font-bold">Back to Streets</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="text-white hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Categories</a>
              <a href="#" className="text-white hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">New Arrivals</a>
              <a href="#" className="text-white hover:text-primary-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Trending</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="btn-secondary p-2">
                <Search className="h-5 w-5" />
              </button>
              <button className="btn-secondary p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="btn-secondary p-2">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="btn-secondary p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="btn-secondary p-2">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-secondary p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-morphism border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Home</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Categories</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">New Arrivals</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Trending</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Login</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
