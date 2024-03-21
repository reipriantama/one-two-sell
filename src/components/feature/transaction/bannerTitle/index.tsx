import React from 'react';
import Button from '../../ui/button';

const BannerTitle = () => {
  return (
    <div className='space-y-12'>
      <div className='bg-[#E0E0E0] w-full h-[160px] rounded-xl'>image</div>
      <div className='flex justify-between border-b-[1px] gap-6'>
        <Button
          buttonText='Informasi Event & Tiket'
          className='pb-2  hover:text-black rounded-none text-[#848484] flex-1'
        />
        <Button
          buttonText='Informasi Pribadi'
          className='pb-2  hover:text-black rounded-none text-[#848484] flex-1'
        />
        <Button
          buttonText='Metode Pembayaran'
          className='pb-2  hover:text-black rounded-none text-[#848484] flex-1'
        />
        <Button
          buttonText='Order Review'
          className='pb-2  hover:text-black rounded-none text-[#848484] flex-1'
        />
      </div>
    </div>
  );
};

export default BannerTitle;
