import React, { useContext } from 'react'
import Item from './Item/Item'
import { ShopContex } from '../Context/ShopContex'

const RelatedProduct = (props) => {
    const {all_product} = useContext(ShopContex);
    const product = props.product;
    const data_Product = all_product.filter((e)=> (e.id !== Number(product.id))&&(e.category === product.category));
  return (
    <div className='flex flex-col items-center realterproducts'>
        <h1 className='text-3xl font-bold '>Related Products</h1>
        <hr className='w-20 h-1 bg-gray-700 rounded-full'/>
        <div className="flex flex-wrap items-center justify-center m-auto my-12 mx-7 related-items gap-7">
            {data_Product.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default RelatedProduct