import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../assets/hero.png'

function Hero() {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                    Style Your World
                </h1>
                <p className="text-base md:text-lg mb-6 px-4">
                    Premium fashion for everyone
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <Link to="/mens" className="bg-black text-white px-6 py-3 hover:bg-gray-800 rounded">
                        Men
                    </Link>
                    <Link to="/womens" className="bg-white text-black px-6 py-3 hover:bg-gray-100 rounded">
                        Women
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
