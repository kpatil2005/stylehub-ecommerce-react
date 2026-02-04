import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Item from '../../components/item/item'

const RelatedProducts = () => {
  const { all_product } = useContext(ShopContext)
  
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Related Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {all_product.slice(0, 4).map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts