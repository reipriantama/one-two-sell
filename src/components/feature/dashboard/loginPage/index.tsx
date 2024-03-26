import Button from '@/components/ui/main/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginCard = (props: any) => {
  return (
    <div
      className={`bg-white rounded-xl border-[1px] p-9 space-y-[102px] ${props.className}`}
    >
      <div>
        <Image
          src='/assets/main/layout/navbar/oneTwoSellLogo.svg'
          alt='logo'
          width={48}
          height={48}
        />
      </div>
      <div className='space-y-6'>
        <div className='space-y-1'>
          <h1 className='text-5xl font-bold text-navy-blue'>Selamat Datang!</h1>
          <p className='text-xl text-[#757575]'>
            Silahkan masukan informasi anda untuk masuk
          </p>
        </div>
        <div className='space-y-2 text-[#2D4074]'>
          <div className='space-y-1'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Masukan email anda disni'
              className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Masukan password anda'
              className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
            />
            <p className='text-xs text-end text-[#757575] cursor-pointer'>
              Lupa Password?
            </p>
          </div>
        </div>
        <div>
          <Button
            buttonText='Masuk'
            className='w-full text-white text-sm flex justify-center bg-[#2D4074]'
            link='/dashboard/account-list'
          />
        </div>
      </div>
      <p className='flex justify-center text-xs font-bold text-[#C2C2C2]'>
        One Two Sell | 2023
      </p>
    </div>
  );
};

export default LoginCard;
