import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContex } from '../../Context/ShopContex'
const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  const {getTotalCartItem} = useContext(ShopContex);
  
  return (
    <nav className="top-0 left-0 right-0 z-40 flex items-center p-6 bg-white shadow-lg lg:justify-around sm:justify-between">
        <div className="flex items-center gap-3">
            <img className='h-8' src={logo} alt="" srcset="" />
            <p className='text-2xl font-bold'>SHOPING</p>
        </div>
        
        <ul className='flex items-center gap-12 text-base list-none nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kid">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="flex items-center nav_login gap-11">
            <Link to="/login"><button className='w-32 h-10 border rounded-full border-rose-300 active:bg-rose-500'>Login</button></Link>
            <Link to="/cart"><div className='relative flex items-center'>
              <ion-icon name="cart-outline"></ion-icon>
              <div className="absolute flex items-center justify-center w-4 h-4 ml-4 -mt-4 text-xs text-white bg-red-500 rounded-full cart-count">{getTotalCartItem()}</div>
            </div></Link>
        </div>
    </nav>
  )
}

export default Navbar