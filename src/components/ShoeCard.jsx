import React from 'react'
import { Star, Heart, ShoppingBag } from 'lucide-react'

const ShoeCard = ({ product }) => {
  return (
    <div className="glass-card group cursor-pointer">
      <div className="relative mb-4">
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
        
        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors">
            <Heart className="h-4 w-4 text-white" />
          </button>
          <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors">
            <ShoppingBag className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-white text-xl font-bold">${product.price}</span>
          <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
          <span className="text-green-400 text-sm font-medium">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
          </span>
        </div>

        <button className="w-full btn-primary py-2 text-sm mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ShoeCard
