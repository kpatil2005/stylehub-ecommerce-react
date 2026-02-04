import React, { useState } from 'react'

function NewsLatter() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <div className="bg-gradient-to-r from-gray-900 to-black py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">Get exclusive offers and latest fashion trends delivered to your inbox</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border-none outline-none text-gray-900 bg-white text-sm md:text-base"
                        required
                    />
                    <button 
                        type="submit"
                        className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                    >
                        Subscribe
                    </button>
                </form>
                
                <p className="text-gray-400 text-xs md:text-sm mt-3 md:mt-4">No spam, unsubscribe anytime</p>
            </div>
        </div>
    )
}

export default NewsLatter
