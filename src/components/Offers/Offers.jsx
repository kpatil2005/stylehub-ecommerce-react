import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Limited Time Offers</h2>
          <p className="text-gray-600">Don't miss these exclusive deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-black text-white p-6 md:p-12 relative overflow-hidden group hover:bg-gray-800 transition-colors duration-300">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold">
              50% OFF
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Summer Sale</h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Up to 50% off selected women's items</p>
            <Link to="/womens" className="bg-white text-black px-6 md:px-8 py-2 md:py-3 font-semibold hover:bg-gray-100 transition-colors inline-block text-sm md:text-base">
              Shop Women
            </Link>
          </div>
          
          <div className="bg-white border-2 border-black p-6 md:p-12 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold">
              NEW
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">New Collection</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">Fresh styles for the modern man</p>
            <Link to="/mens" className="bg-black text-white px-6 md:px-8 py-2 md:py-3 font-semibold hover:bg-gray-800 transition-colors inline-block text-sm md:text-base">
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers