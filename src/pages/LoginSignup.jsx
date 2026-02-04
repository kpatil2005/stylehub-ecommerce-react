import React, { useState } from 'react'

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>
            {isLogin ? 'Sign in to your account' : 'Create new account'}
          </h2>
          <p className='mt-2 text-gray-600'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className='ml-1 text-blue-600 hover:text-blue-500 font-medium'
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
        
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-4'>
            {!isLogin && (
              <div>
                <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                <input
                  name='name'
                  type='text'
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleChange}
                  className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your full name'
                />
              </div>
            )}
            
            <div>
              <label className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                name='email'
                type='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter your email'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <input
                name='password'
                type='password'
                required
                value={formData.password}
                onChange={handleChange}
                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter your password'
              />
            </div>
          </div>

          {isLogin && (
            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input type='checkbox' className='h-4 w-4 text-blue-600 border-gray-300 rounded' />
                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
              </label>
              <button type='button' className='text-sm text-blue-600 hover:text-blue-500'>
                Forgot password?
              </button>
            </div>
          )}

          <button
            type='submit'
            className='w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium'
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup