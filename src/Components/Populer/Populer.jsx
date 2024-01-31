import React from 'react'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const Populer = () => {
  return (
    <div className='flex flex-col items-center my-28 populer'>
        <h1 className='text-5xl font-bold '>Populer</h1>
        <hr className='w-20 h-1 bg-gray-700 rounded-full' />
        
        <div className='flex flex-wrap items-center justify-center m-auto mt-12 gap-7'>
            {data_product.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        
    </div>
  )
}

export default Populer