import React from 'react'
import arro_icon from './Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex gap-2 m-8 text-sm Breadcrum'>
        HOME 
        <img src={arro_icon} alt="" srcset="" />
        Shop
        <img src={arro_icon} alt="" srcset="" />
        {product.category}
        <img src={arro_icon} alt="" srcset="" />
        {product.name}

    </div>
  )
}

export default Breadcrum