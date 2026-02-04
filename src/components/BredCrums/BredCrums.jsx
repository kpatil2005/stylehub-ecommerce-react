import React from 'react'

const BredCrums = (props) => {
  const {product} = props;
  
  if (!product) return <div>Loading...</div>
  
  return (
    <div className='flex items-center gap-2 p-4 text-sm text-gray-600'>
      Home <span>→</span> SHOP <span>→</span> {product.category} <span>→</span> {product.name}
    </div>
  )
}

export default BredCrums