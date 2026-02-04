import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/item'

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  
  return (
    <div className='px-6 py-8'>
      <div className='relative w-full h-80 mb-8 rounded-lg overflow-hidden bg-gray-200'>
        <img className='w-full h-full object-cover' src={props.banner} alt="Banner" onError={(e) => console.log('Image failed to load:', e)} />
        <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center'>
          <div className='text-white px-8'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 capitalize'>
              {props.category} Collection
            </h1>
            <p className='text-lg md:text-xl'>
              Discover the latest trends in {props.category} fashion
            </p>
          </div>
        </div>
      </div>
      
      <div className='flex justify-between items-center mb-8 border-b pb-4'>
        <p className='text-gray-600'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='flex items-center gap-2 text-gray-600'>
          Sort by 
          <select className='border border-gray-300 px-3 py-1 rounded'>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>

      <div className="text-center">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Explore More
        </button>
      </div>
    </div>
  )
}

export default ShopCategory