import React, { useContext } from 'react'


import { ShopContext } from '../../context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart} = useContext(ShopContext);
  return (
    <div className='flex flex-col lg:flex-row gap-8 p-6'>
      <div className="lg:w-1/2">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <img src={product.image} alt="" className='w-20 h-20 object-cover rounded border' />
            <img src={product.image} alt="" className='w-20 h-20 object-cover rounded border' />
            <img src={product.image} alt="" className='w-20 h-20 object-cover rounded border' />
          </div>
          <div className='flex-1'>
            <img className='w-full max-w-md rounded-lg' src={product.image} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 space-y-4">
<h1 className='text-3xl font-bold'>{product.name}</h1>
<div className="flex items-center gap-2">
  <span style={{color: '#ffd700'}}>★★★★</span><span style={{color: '#ccc'}}>★</span>
  <p className='text-gray-600'>(130)</p>
</div>
<div className="flex items-center gap-4">
  <div className="text-lg text-gray-500 line-through">
${product.old_price}
  </div>
  <div className="text-2xl font-bold text-gray-900">
    ${product.new_price}
  </div>
  </div>
  <div className="text-gray-600">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
  </div>
  <div className='space-y-2'>
    <h3 className='font-semibold'>Select Size</h3>
    <div className="flex gap-2">
      <button className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>S</button>
      <button className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>M</button>
      <button className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>L</button>
      <button className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>XL</button>
      <button className='border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'>XXL</button>
    </div>
  </div>
  <button onClick={()=>{addTocart(product.id)}} className='bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 w-full'>ADD TO CART</button>
  <div className="text-sm text-gray-600 space-y-1">
    <p><span className='font-medium'>Category:</span> Women, T-Shirt, Crop Top</p>
  </div>
  <div className="text-sm text-gray-600">
    <p><span className='font-medium'>Tags:</span> Modern, Latest, Trend Shorts</p>
  </div>
</div>
      </div>
    
  )
}

export default ProductDisplay