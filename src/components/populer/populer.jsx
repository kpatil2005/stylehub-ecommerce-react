import React from 'react'
import data_product from '../../assets/data'
import Item from '../item/item'

const Popular = () => {
  return (
    <div className='py-8 md:py-12 px-4 md:px-6 text-center'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>POPULAR IN WOMEN</h1>
      <hr className='w-16 md:w-24 h-1 bg-gray-900 mx-auto mb-6 md:mb-8'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto'>
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular