import React from 'react'
import Item from './Item/Item'
import new_collection from './Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center new-collections'>
        <h1 className='text-5xl font-bold '>NEW CPLLECTION</h1>
        <hr className='w-20 h-1 bg-gray-700 rounded-full' />
        <div className="flex flex-wrap items-center justify-center m-auto mt-12 collection gap-7">
            {new_collection.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default NewCollections