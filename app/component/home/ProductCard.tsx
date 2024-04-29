import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className='w-[240px] shadow-lg p-3 flex justify-center items-center'>
      <div className='relative w-full h-[200px] flex justify-center'>
        <Image src={product.thumbnail} className='object-cover' fill alt="product" priority={true} />
      </div>
    </div>
  );
};

export default ProductCard;
