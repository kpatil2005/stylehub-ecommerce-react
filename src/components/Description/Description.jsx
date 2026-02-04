import React from 'react'

const Description = () => {
  return (
    <div className='p-6'>
      <div className='border-b mb-4'>
        <button className='px-4 py-2 border-b-2 border-black font-medium'>Description</button>
        <button className='px-4 py-2 text-gray-500'>Reviews (122)</button>
      </div>
      <div className='text-gray-600 space-y-4'>
        <p>This is a high-quality product made with premium materials. It offers excellent durability and style.</p>
        <p>Perfect for everyday use with a modern design that fits any lifestyle.</p>
      </div>
    </div>
  )
}

export default Description