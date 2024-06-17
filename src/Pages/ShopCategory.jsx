import React, { useContext } from 'react'
import { ShopContex } from '../Context/ShopContex'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContex);
  return (
    <div className='flex flex-col w-10/12 m-auto mb-14 Shop-category'>
      <img className='block mx-auto my-8 ' src={props.banner} alt="" srcset="" />
      <div className="flex items-center justify-between mx-48 my-0 shopcategory-indexSort">
        <p className='text-lg '>
          <span className='font-bold '>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center grid-cols-2 gap-2 px-6 py-3 border-2 border-gray-500 rounded-full shopcategory-sort">
          Sort by <img alt='down' src={dropdown_icon} />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center m-auto mt-12 shopcategory-product gap-7">
        {all_product.map((item, index)=>{
          if(props.category===item.category){
            return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
        })}
        
      </div>
      <div className="px-8 py-2 mx-auto mt-8 text-xs font-thin bg-pink-100 border border-pink-200 rounded-full text-slate-700 explore-more">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
