import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-72 m-2 p-4 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow'>
       <Link to={`/product/${props.id}`}>
         <img onClick={() => window.scrollTo(0,0)} src={props.image} alt="" className='w-full h-80 object-cover rounded mb-3' />
       </Link>
        <p className='font-semibold text-gray-800 mb-2'>{props.name}</p>
        <div className='flex justify-center gap-3 items-center'>
            <div className="text-gray-900 font-bold">
                ${props.new_price}
            </div>
            <div className="text-gray-500 line-through">
                ${props.old_price}
            </div>
            <div className="text-red-500 text-sm font-semibold">
                {Math.round(((props.old_price - props.new_price) / props.old_price) * 100)}% OFF
            </div>
        </div>
    </div>
  )
}

export default Item