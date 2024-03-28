import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch, AiTwotoneBell } from 'react-icons/ai';

const NavbarDashboard = () => {
  return (
    <div className='flex bg-white'>
      <div className='w-[282px] h-[72px] p-5 shadow-sm'>
        <Image
          src='/assets/dashboard/layout/navbar/oneTwoSellLogo.svg'
          alt='logo'
          width={32}
          height={32}
        />
      </div>
      <div className='px-5 py-[14px] flex item gap-6 justify-between items-center w-full shadow-sm'>
        <div className='relative w-full flex pr-6 border-r-[1px]'>
          <input
            type='search'
            placeholder='Cari Event atau Akun'
            className='w-full border-[1px] rounded-[4px] text-sm text-[#989898] px-10 py-2'
          />
          <AiOutlineSearch className='absolute top-4 left-[18px] size-3 text-[#989898]' />
        </div>
        <AiTwotoneBell className='size-6' />
      </div>
    </div>
  );
};

export default NavbarDashboard;
