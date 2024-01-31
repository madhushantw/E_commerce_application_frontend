import React from 'react'
import logo from './Assets/logo.png'

const Fotter = props => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center gap-4'>
            <img className='w-10 h-10' src={logo} alt="" srcset="" />
            <h1 className='text-3xl font-bold text-slate-700'>SHOPPER</h1>
        </div>
        <div className='my-10 '>
            <ul className='flex gap-10 list-none'>
                <li>Company</li>
                <li>Products</li>
                <li>Officer</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex gap-5 mb-10 text-slate-600'>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-pinterest"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
        </div>
        <hr className='w-4/5 h-px mb-3 border-none rounded-full bg-slate-400'/>
        <div>
            <p className='text-sm '>Copyright @ 2024 - All Right Reserived</p>
        </div>
    </div>
  )
}

Fotter.propTypes = {}

export default Fotter