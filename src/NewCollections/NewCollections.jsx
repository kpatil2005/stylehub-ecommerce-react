import React from 'react'
import new_collections from '../assets/NewCollections'
import Item from '../components/item/item'

function NewCollections() {
    return (
        <div className='bg-white py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-light text-gray-900 mb-4'>New Collections</h1>
                    <div className='w-16 h-0.5 bg-gray-900 mx-auto'></div>
                </div>
                
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    {new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}
                </div>
                
                <div className='text-center mt-12'>
                    <button className='border border-gray-900 px-8 py-3 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewCollections