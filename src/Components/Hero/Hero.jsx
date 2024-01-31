import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='flex flex-wrap items-center justify-center px-24 bg-gradient-to-bl from-sky-100 hero '>
        <div className="flex flex-col justify-center flex-1 font-semibold hero-left">
            <h2 className='text-xl font-semibold text-red-900'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="flex items-center gap-5 hero-hand-icon">
                    <p className='text-6xl font-bold text-slate-800'>NEW</p>
                    <img className='w-24 ' src={hand_icon} alt="" srcset="" />
                </div>
                <p className='text-6xl font-bold text-slate-800'>Collections</p>
                <p className='text-6xl font-bold text-slate-800'>for everyone</p>
            </div>
            <div className="flex justify-center items-center gap-3.5 mt-6 font-medium text-white bg-red-500 rounded-full hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" srcset="" />
            </div>
        </div>
        <div className="h-[100vh] hero-right">
            <img className='h-[100px]' src={hero_img} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Hero