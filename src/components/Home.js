import React from 'react'
import Header from './Header'
import Banner from './Banner'
import ProductFeed from './ProductFeed'

function Home() {
  return (
    <div className='bg-gray-100'>
        <Header/>
        <Banner/>
        <ProductFeed/>
    </div>
  )
}

export default Home