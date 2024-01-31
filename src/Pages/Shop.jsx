import React from 'react'
import Hero from '../Components/Hero/Hero'
import Populer from '../Components/Populer/Populer'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'

const Shop = () => {
  return (
    <div className=''>
      <Hero />
      <Populer />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop