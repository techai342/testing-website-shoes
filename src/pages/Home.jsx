import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Truck, Shield, Zap, Play, Users, ShoppingBag, Award, Heart, Globe, CheckCircle, TrendingUp } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ShoeCard from '../components/ShoeCard'

const Home = () => {
  // Hero Stats
  const heroStats = [
    { icon: <Users className="h-6 w-6" />, number: "50K+", label: "Happy Customers" },
    { icon: <Star className="h-6 w-6" />, number: "4.9/5", label: "Rating" },
    { icon: <ShoppingBag className="h-6 w-6" />, number: "10K+", label: "Products" }
  ]

  // Features for main section
  const features = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $100"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Authentic Products", 
      description: "100% genuine products guaranteed"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Fast Delivery",
      description: "Same day shipping available"
    }
  ]

  // About Features
  const aboutFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Best sneaker store 2024 award winner",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Authentic", 
      description: "Every product verified by experts",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer First",
      description: "98% customer satisfaction rate", 
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Worldwide Shipping",
      description: "Free shipping over $150",
      color: "from-blue-500 to-cyan-500"
    }
  ]

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-150"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white text-sm font-medium">🎉 1000+ New Arrivals This Week</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Step Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ultimate Style
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the latest sneakers and streetwear. From school essentials to limited edition Jordans, 
              we've got your style covered with 100% authentic products.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center group">
                Shop Collection 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary text-lg px-8 py-4 flex items-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center items-center mb-2">
                    <div className="text-purple-400 mr-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-primary-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-primary-500">SneakerHub</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're more than just a sneaker store - we're a community of enthusiasts 
              dedicated to bringing you the most authentic and exclusive footwear from 
              around the world.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 
                  group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  To provide sneaker enthusiasts with 100% authentic, high-quality footwear 
                  while building a community that celebrates streetwear culture and style.
                </p>
                <div className="space-y-4">
                  {[
                    "Authenticity guaranteed on all products",
                    "Fast and reliable worldwide shipping", 
                    "Exceptional customer service",
                    "Community-driven approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Users className="h-24 w-24 text-white opacity-80" />
                </div>
              </div>
            </div>
          </motion.div>
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
