import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (

    <div className='transition duration-500 ease-in-out w-72 item hover:scale-105'>
        <Link onClick={window.scrollTo(0,0)} to={`/product/${props.id}`}><img src={props.img} alt="" srcset="" /></Link>
        <p className='my-4'>{props.name}</p>
        <div className="flex justify-between item-price">
          <div className="text-lg font-semibold item-price-new text-neutral-600">
            ${props.new_price}
          </div>
          <div className="text-lg font-semibold line-through item-price-old text-neutral-400">
            ${props.old_price}
          </div>
        </div>
    </div>
  )
}

export default Item