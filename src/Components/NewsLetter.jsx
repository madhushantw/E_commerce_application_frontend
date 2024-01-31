import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center px-0 mx-auto mt-20 gap-7 news-letter py-28 my-28 bg-gradient-to-b from-slate-100'>
        <h1 className='text-3xl font-semibold text-slate-700'>Get Exclusive Offeers On your Email</h1>
        <p className='flex text-xl text-slate-700'>Subcribe to our newletter and stsy updated</p>
        <div className='flex items-center justify-between bg-white border-2 rounded-full border-slate-100 '>
            <input className='h-16' type="email" placeholder='Email' />
            <button className='h-16 text-base text-white bg-black rounded-full w-52'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter