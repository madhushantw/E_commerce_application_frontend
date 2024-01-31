import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContex = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;  
    }
    return cart;
}

const ShopContexProvider = (props) => {
    const [cartItem, setcartItem] = useState(getDefaultCart())
    
    const addToCart = (itemId) => {
        setcartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))
        console.log(cartItem);
    }
    const removeFromCart = (itemId) => {
        setcartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }

    const grtTotelCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            
        }return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
            
        }return totalItem;
    }
    const contexValue =  {all_product, cartItem, addToCart, removeFromCart, grtTotelCartAmount, getTotalCartItem};
    return (
        <ShopContex.Provider value={contexValue}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider;