import React, { useState } from 'react'
import { Menu, X, Search, ShoppingBag, User, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(null)

  // Inline CSS styles
  const styles = `
    .neo-glass {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .neo-button {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      transition: all 0.3s ease;
    }
    
    .neo-button:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
    }
    
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 15s ease infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .glow-red {
      box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
    }
    
    .hover-shadow-glow:hover {
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
    }
    
    .drop-shadow-2xl {
      filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
    }
  `

  return (
    <>
      {/* Inject styles */}
      <style>{styles}</style>
      
      <nav className="neo-glass sticky top-0 z-50 border-b border-white/10">
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-cyan-400/20 animate-gradient-x"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-x 15s ease infinite'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'float 6s ease-in-out infinite',
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Glow Effect */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src="/logo.png" 
                    alt="Back to Streets" 
                    className="h-10 w-10 mr-3 relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl" 
                  />
                </div>
                <Link 
                  to="/" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200 text-2xl font-black tracking-tighter relative"
                  onMouseEnter={() => setIsHovered('logo')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <span className="relative">
                    BACK TO STREETS
                    <span className={`absolute inset-0 text-white blur-md transition-all duration-300 ${isHovered === 'logo' ? 'opacity-100' : 'opacity-0'}`}>
                      BACK TO STREETS
                    </span>
                  </span>
                  <Sparkles className="inline-block w-4 h-4 ml-2 text-yellow-300 animate-pulse" />
                </Link>
              </div>
            </div>

            {/* Desktop Menu with Hover Effects */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Categories', path: '/categories' },
                  { name: 'New Arrivals', path: '#' },
                  { name: 'Trending', path: '#' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative group"
                    onMouseEnter={() => setIsHovered(item.name)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span className={`relative z-10 px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-500 ${
                      isHovered === item.name 
                        ? 'text-white transform scale-110' 
                        : 'text-gray-200 hover:text-white'
                    }`}>
                      {item.name}
                      <span className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-400/30 rounded-2xl blur-xl transition-all duration-300 ${
                        isHovered === item.name ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </span>
                    
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                      isHovered === item.name ? 'w-full' : ''
                    }`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section with Modern Icons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                <button className="neo-button group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <Search className="h-5 w-5 relative z-10 text-gray-200 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
                </button>

                <button className="neo-button group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <ShoppingBag className="h-5 w-5 relative z-10 text-gray-200 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-xs rounded-full h-6 w-6 flex items-center justify-center text-white font-bold glow-red">
                    3
                  </span>
                </button>

                <Link to="/login" className="neo-button group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <User className="h-5 w-5 relative z-10 text-gray-200 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button className="neo-button p-3">
                <Search className="h-5 w-5" />
              </button>
              <button className="neo-button p-3 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-xs rounded-full h-5 w-5 flex items-center justify-center text-white font-bold">
                  3
                </span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="neo-button p-3"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Modern Design */}
        {isOpen && (
          <div className="md:hidden neo-glass border-t border-white/10">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Categories', path: '/categories' },
                { name: 'New Arrivals', path: '#' },
                { name: 'Trending', path: '#' },
                { name: 'Admin Login', path: '/login' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-4 rounded-2xl text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 hover-shadow-glow group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center">
                    {item.name}
                    <Sparkles className="ml-2 h-4 w-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
