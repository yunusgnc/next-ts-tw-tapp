import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-center items-center h-[237px] bg-[#fafafa]'>
      <div className='h-[137px] w-full relative'>
        <Image src={"/banner.jpg"} fill alt="banner" priority={true} />
      </div>
    </div>
  );
};

export default Banner;
