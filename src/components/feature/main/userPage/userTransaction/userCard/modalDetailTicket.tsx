import Button from '@/components/ui/main/button';
import Image from 'next/image';
import React from 'react';
import { IoClose } from 'react-icons/io5';

const ModalDetailTicket = (props: any) => {
  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full rounded-3xl max-w-[618px] bg-white p-6 space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-semibold'>Detail Tiket</div>
          <div>
            <IoClose
              className='size-6 text-[#1C1B1F] cursor-pointer hover:text-red-500'
              onClick={props.closeModal}
            />
          </div>
        </div>
        <div className='flex w-full'>
          <div className='rounded-2xl shadow-lg p-6 space-y-3 '>
            <p className='text-xl text-navy-blue font-semibold'>
              Parade Sihir - Bandung
            </p>
            <div className=' rounded-lg'>
              <Image
                src='/assets/main/landingPage/sellerFav/imageConcert2.png'
                alt='logo'
                width={384}
                height={108}
                className='rounded-lg w-[384px] h-[108px] object-cover'
              />
            </div>
            <div className='flex items-center'>
              <div className='text-[#2D4074] text-2xl font-bold border-r-[1px] pr-3'>
                <p className=''>MEI</p>
                <div className='flex items-center gap-1 '>
                  <p>18</p>
                  <p className='text-xs font-medium'>2023</p>
                </div>
              </div>
              <div className='pl-3 space-y-2'>
                <div className='text-[#2D4074] text-base font-bold'>
                  7.30 - 09.00 PM
                </div>
                <div className=''>
                  <p className='text-sm text-[#A6A6A6] font-semibold'>
                    Lapangan Pussenif
                  </p>
                  <p className='text-xs text-[#A6A6A6]'>Bandung</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between rounded-2xl shadow-lg p-6'>
            <div className='flex gap-2 text-[10px] text-[#A6A6A6] items-center'>
              <div className='uppercase'>admit</div>
              <div>:</div>
              <div className='text-[32px] text-navy-blue font-extrabold'>
                02
              </div>
            </div>
            <div className='flex gap-2 text-[10px] text-[#A6A6A6] items-center'>
              <div className='uppercase'>section</div>
              <div>:</div>
              <div className='text-[32px] text-navy-blue font-extrabold'>C</div>
            </div>
            <div className='flex gap-2 text-[10px] text-[#A6A6A6] items-center'>
              <div className='uppercase'>row</div>
              <div>:</div>
              <div className='text-[32px] text-navy-blue font-extrabold'>
                10
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button
            buttonText='Download Tiket'
            className='w-full flex justify-center'
            primary
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDetailTicket;
