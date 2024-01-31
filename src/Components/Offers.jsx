import React from 'react'
import exclusive_img from './Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex px-24 py-0 m-auto mb-36 bg-gradient-to-b from-gray-200 offers'>
        <div className="flex flex-col justify-center flex-1 font-semibold text-gray-800 offer-left">
            <h1 className='text-6xl '>Exclusive</h1>
            <h1 className='text-6xl '>Offers for You</h1>
            <p className='text-xl '>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-64 h-16 text-xl font-medium text-white rounded-full cursor-pointer bg-rose-700 mt-7'>Check Now</button>
        </div>
        <div className="flex items-center justify-end flex-1 offer-right">
            <img className='' src={exclusive_img} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Offers