import React, { useContext } from 'react'
import { ShopContex } from '../../Context/ShopContex'
import remone_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { grtTotelCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContex);
    return (
        <div className='flex flex-col w-[90vw] mx-auto cartitems'>
            <div className="grid grid-cols-8 my-4 item-format">
                <p className=''>Product</p>
                <p className='col-span-3 '>Title</p>
                <p className=''>Price</p>
                <p className=''>Quantity</p>
                <p className=''>Total</p>
                <p className=' justify-self-end'>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div>
                            <div className="grid items-center grid-cols-8 my-2 cartitem-format">
                                <img src={e.image} alt="" srcset="" className="h-[50px] mw-10 carticon-procuct-icon" />
                                <p className='col-span-3'>{e.name}</p>
                                <p className=''>{e.new_price}</p>
                                <div><button className="w-8 h-8 p-1 border cartitems-quntity">{cartItem[e.id]}</button></div>
                                <p className=''>${e.new_price * cartItem[e.id]}</p>
                                <img className=' justify-self-end' src={remone_icon} onClick={() => { removeFromCart(e.id) }} alt="" srcset="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; 
            })}
            <div className="flex mt-10 gap-36 totel-cost">
                <div className='flex-1  *:flex *:pb-5 *:justify-between'>
                    <h1 className='mb-5 text-2xl font-extrabold'>Cart total</h1>
                    <div>
                        <p>Subtotal</p>
                        <p>${grtTotelCartAmount()}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='font-bold '>
                        <p>Total</p>
                        <p>${grtTotelCartAmount()}</p>
                    </div>
                    <div>
                        <button className='px-10 py-3 text-white bg-red-500 '>CHECKOUT</button>
                    </div>
                </div>
                <div className='flex-1 '>
                    <p className='my-4'>If you have a promo code Enter it here</p>
                    <div className='flex flex-row *:py-3 my-4 w-100vw'>
                        <input className='px-4 bg-gray-100 w-[300px]' type="text" placeholder='Promo code' />
                        <button className='text-white bg-black w-[150px]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem