import Button from '@/components/ui/main/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

const SignUpModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full max-w-[540px] bg-white p-9 space-y-12'>
        <div className='flex justify-between items-center'>
          <Image
            src='/assets/main/layout/navbar/oneTwoSellLogo.svg'
            alt='logo'
            width={72}
            height={72}
          />
          <IoClose
            className='size-[48px] text-navy-blue'
            onClick={closeModal}
          />
        </div>
        <div className='space-y-6'>
          <div className='space-y-1'>
            <h1 className='text-5xl font-bold text-navy-blue'>
              Selamat Datang!
            </h1>
            <p className='text-xl text-navy-blue'>
              Silahkan masukan informasi anda untuk daftar
            </p>
          </div>
          <div className='space-y-2 text-[#2D4074]'>
            <div className='space-y-1'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Masukan email anda'
                className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
              />
            </div>
            <div className='space-y-1'>
              <label htmlFor='name'>Username</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Masukan username anda'
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
            </div>
          </div>
          <div className='space-y-4'>
            <Button
              buttonText='Daftar'
              className='w-full text-white bg-[#4A62A2]'
            />
            <p className='flex justify-center text-navy-blue'>
              Sudah punya akun ?
              <Link href='' className='underline' onClick={closeModal}>
                {' '}
                Klik disini
              </Link>
            </p>
          </div>
          <div className='space-y-2'>
            <p className='flex justify-center text-navy-blue'>
              atau masuk dengan
            </p>
            <Button
              buttonText='Masuk dengan Google'
              className='w-full text-white bg-[#4A62A2]'
            />
          </div>
        </div>
        <p className='flex justify-center text-sm font-light'>
          Copyright © 2023 12 Sell
        </p>
      </div>
    </div>
  );
};
export default SignUpModal;
