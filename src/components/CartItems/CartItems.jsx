import React, { useContext } from 'react'


import { ShopContext } from '../../context/ShopContext'
const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='max-w-6xl mx-auto p-6'>
            <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 rounded-lg font-semibold text-gray-700 mb-4">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='grid grid-cols-6 gap-4 p-4 items-center border-b border-gray-200'>
                            <img src={e.image} alt="" className='w-20 h-20 object-cover rounded' />
                            <p className='font-medium'>{e.name}</p>
                            <p className='text-gray-700'>${e.new_price}</p>
                            <div className='bg-gray-100 px-3 py-1 rounded text-center font-medium'>
                                {cartItems[e.id]}
                            </div>
                            <p className='font-semibold'>${e.new_price*cartItems[e.id]}</p>
                            <button className='text-red-500 hover:text-red-700 text-xl' onClick={()=> removeFromCart(e.id)}>✕</button>
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="lg:w-1/2">
                    <h2 className='text-2xl font-bold mb-4'>Cart Totals</h2>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <div className="flex justify-between items-center">
                            <p className='font-medium'>Subtotal</p>
                            <p className='font-semibold'>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='border-gray-300'/>
                        <div className="flex justify-between items-center">
                            <p className='font-medium'>Shipping Fee</p>
                            <p className='text-green-600 font-medium'>Free</p>
                        </div>
                        <hr className='border-gray-300'/>
                        <div className="flex justify-between items-center text-lg">
                            <p className='font-bold'>Total</p>
                            <p className='font-bold'>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className='w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4 font-medium'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="lg:w-1/2">
                    <h3 className='text-xl font-semibold mb-4'>Promo Code</h3>
                    <p className='text-gray-600 mb-4'>If you have a promo code, enter it here</p>
                    <div className="flex gap-2">
                        <input type='text' placeholder='Promo code' className='flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'/>
                        <button className='bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems