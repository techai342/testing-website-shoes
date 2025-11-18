import React from 'react'
import { ArrowRight, Star, Truck, Shield, Zap } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ShoeCard from '../components/ShoeCard'

const Home = () => {
  const featuredCategories = [
    {
      id: 1,
      name: 'School Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      count: '120+ Products'
    },
    {
      id: 2,
      name: 'Joggers',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      count: '85+ Products'
    },
    {
      id: 3,
      name: 'Jordans',
      image: 'https://images.unsplash.com/photo-1556906781-2a4125182f38?w=400',
      count: '60+ Products'
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: 150,
      originalPrice: 180,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: 180,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Jordan 1 Retro',
      price: 200,
      originalPrice: 250,
      image: 'https://images.unsplash.com/photo-1556906781-2a4125182f38?w=400',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Puma RS-X',
      price: 120,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400',
      rating: 4.6,
      reviews: 92
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Step Into <span className="text-primary-500">Style</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the latest sneakers and streetwear. From school essentials to limited edition Jordans, we've got your style covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Explore Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-300">Free delivery on orders over $100</p>
            </div>
            <div className="glass-card text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-300">100% genuine products guaranteed</p>
            </div>
            <div className="glass-card text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Same day shipping available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Categories</h2>
            <p className="text-gray-300 text-lg">Find your perfect style in our curated collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-300 text-lg">Handpicked sneakers that define street style</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ShoeCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
