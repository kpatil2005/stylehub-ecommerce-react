import React, { useState } from 'react'

function NewsLatter() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <div className="bg-gradient-to-r from-gray-900 to-black py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-gray-300 mb-8">Get exclusive offers and latest fashion trends delivered to your inbox</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border-none outline-none text-gray-900 bg-white"
                        required
                    />
                    <button 
                        type="submit"
                        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
                
                <p className="text-gray-400 text-sm mt-4">No spam, unsubscribe anytime</p>
            </div>
        </div>
    )
}

export default NewsLatter
