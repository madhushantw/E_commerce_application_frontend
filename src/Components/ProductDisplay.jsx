import React, { useContext } from 'react'
import star from './Assets/star_icon.png'
import star_dull from './Assets/star_dull_icon.png'
import { ShopContex } from '../Context/ShopContex';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContex);
  return (
    <div className='flex flex-row gap-16 mx-24 mb-24 product-display'>
        <div className="display-left basis-1/2">
            <div className="grid grid-cols-5 grid-rows-4 gap-4 display-img">
                <img src={product.image} alt="" srcset="" />
                <img className='w-screen col-span-4 row-span-4' src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
                <img src={product.image} alt="" srcset="" />
            </div>
        </div>
        <div className="flex flex-col justify-between my-4 display-right basis-1/2">
            <h1 className='text-2xl '>{product.name}</h1>
            <div className="flex items-center gap-2 star">
                <img src={star} alt="" srcset="" />
                <img src={star} alt="" srcset="" />
                <img src={star} alt="" srcset="" />
                <img src={star} alt="" srcset="" />
                <img src={star_dull} alt="" srcset="" />
                <p>(122)</p>
            </div>
            <div className="flex *:text-lg gap-4 font-bold prices">
                <div className="line-through text-slate-500 old-price">${product.old_price}</div>
                <div className="text-red-600 new-price">${product.new_price}</div>
            </div>
            <div className="text-sm decription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, corrupti. Laboriosam odio ipsam at minus neque veniam natus earum, provident ipsum enim doloremque non sit vero? Dicta laboriosam et nisi at alias enim inventore expedita fugiat suscipit?
            </div>
            <div className="size *:my-4 *:text-lg">
                <h1>Select Size</h1>
                <div className="flex *:flex gap-4 *:bg-slate-50 *:w-10 *:h-10 *:justify-center *:items-center *:border size-list">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='py-2 w-[150px] text-base text-white bg-red-500'>Add to Cart</button>
            <div className="text-sm category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, iure!</div>
        </div>

    </div>
  )
}

export default ProductDisplay