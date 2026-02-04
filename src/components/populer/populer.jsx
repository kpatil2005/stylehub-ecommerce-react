import React from 'react'
import data_product from '../../assets/data'
import Item from '../item/item'

const Popular = () => {
  return (
    <div className='py-12 px-6 text-center'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>POPULAR IN WOMEN</h1>
      <hr className='w-24 h-1 bg-gray-900 mx-auto mb-8'/>
      <div className='flex flex-wrap justify-center gap-6'>
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular