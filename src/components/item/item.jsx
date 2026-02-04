import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow'>
       <Link to={`/product/${props.id}`}>
         <img onClick={() => window.scrollTo(0,0)} src={props.image} alt="" className='w-full h-56 sm:h-64 md:h-72 object-contain rounded-t-lg mb-3 bg-gray-50' />
       </Link>
        <div className='p-3 sm:p-4'>
          <p className='font-semibold text-gray-800 mb-2 text-sm sm:text-base line-clamp-2'>{props.name}</p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3'>
              <div className="text-gray-900 font-bold text-sm sm:text-base">
                  ${props.new_price}
              </div>
              <div className="text-gray-500 line-through text-xs sm:text-sm">
                  ${props.old_price}
              </div>
              <div className="text-red-500 text-xs sm:text-sm font-semibold">
                  {Math.round(((props.old_price - props.new_price) / props.old_price) * 100)}% OFF
              </div>
          </div>
        </div>
    </div>
  )
}

export default Item