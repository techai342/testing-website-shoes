import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Shield, 
  Heart, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react'

const About = () => {
  const features = [
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

  const milestones = [
    { year: "2020", event: "Founded with passion for sneakers" },
    { year: "2021", event: "Reached 10,000 customers" },
    { year: "2022", event: "Opened international shipping" },
    { year: "2023", event: "Won Best Sneaker Store Award" },
    { year: "2024", event: "50,000+ happy customers" }
  ]

  const teamStats = [
    { icon: <Users className="h-6 w-6" />, number: "25+", label: "Team Members" },
    { icon: <Star className="h-6 w-6" />, number: "4.9", label: "Average Rating" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "99%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-primary-500">SneakerHub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're more than just a sneaker store - we're a community of enthusiasts 
            dedicated to bringing you the most authentic and exclusive footwear from 
            around the world.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
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

        {/* Team Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="text-primary-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 pl-8">
                    <div className="glass-card p-6">
                      <div className="text-primary-500 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-white">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-500 border-4 border-slate-900 z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the growing SneakerHub family and experience the difference 
            that passion and authenticity make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3 text-lg">
              Shop Now
            </button>
            <button className="btn-secondary px-8 py-3 text-lg">
              Contact Us
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
