import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Limited Time Offers</h2>
          <p className="text-gray-600">Don't miss these exclusive deals</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black text-white p-12 relative overflow-hidden group hover:bg-gray-800 transition-colors duration-300">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold">
              50% OFF
            </div>
            <h3 className="text-2xl font-bold mb-3">Summer Sale</h3>
            <p className="text-gray-300 mb-6">Up to 50% off selected women's items</p>
            <Link to="/womens" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors inline-block">
              Shop Women
            </Link>
          </div>
          
          <div className="bg-white border-2 border-black p-12 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 text-sm font-bold">
              NEW
            </div>
            <h3 className="text-2xl font-bold mb-3">New Collection</h3>
            <p className="text-gray-600 mb-6">Fresh styles for the modern man</p>
            <Link to="/mens" className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors inline-block">
              Shop Men
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers