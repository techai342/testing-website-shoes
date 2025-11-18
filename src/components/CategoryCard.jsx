import React from 'react'
import { ArrowRight } from 'lucide-react'

const CategoryCard = ({ category }) => {
  return (
    <div className="glass-card group cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
          <p className="text-gray-300 text-sm">{category.count}</p>
        </div>
        <button className="btn-primary p-3 group-hover:scale-110 transition-transform duration-300">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default CategoryCard
