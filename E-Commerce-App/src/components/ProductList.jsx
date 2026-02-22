import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products , isAdmin}) => {
  
  return (
    <div className='max-w-[1000px]  mx-auto flex flex-wrap justify-center gap-5 p-6'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
      ))}
     
    </div>
  )
}

export default ProductList
