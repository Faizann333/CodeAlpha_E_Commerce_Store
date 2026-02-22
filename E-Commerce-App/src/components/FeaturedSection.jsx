import React from 'react'
import ProductList from './ProductList'

const FeaturedSection = ({featuredProducts}) => {
  
  return (
    <div>
      <h1 className='text-4xl font-bold text-center py-6 text-white '>---Featured Products---</h1>
      <ProductList products={featuredProducts}/>
    </div>
  )
}

export default FeaturedSection
