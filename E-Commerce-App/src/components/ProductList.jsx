import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='max-w-[900px] bg-amber-300 mx-auto flex flex-wrap justify-center gap-5 p-6'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList
