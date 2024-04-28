import React from 'react'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductCard