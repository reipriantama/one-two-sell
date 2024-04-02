import React from 'react';
import { IoClose } from 'react-icons/io5';

const ModalDetailTransaction = (props: any) => {
  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full rounded-3xl max-w-[708px] bg-white p-6 space-y-6'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-semibold'>Detail Transaksi</p>
          <IoClose
            className='cursor-pointer hover:text-red-500 text-[#1C1B1F]'
            onClick={props.closeModal}
          />
        </div>
        <div className='space-y-6 '>
          <div className='border-b-[1px] pb-6'>
            <p className='text-[#757575]'>Event</p>
            <p className='text-2xl font-semibold text-navy-blue'>
              Parade Sihir - Bandung
            </p>
          </div>
          <div className='border-b-[1px] pb-6'>
            <p className='text-[#757575]'>Tiket</p>
            <p className='font-medium text-[#1E1E1E]'>
              General Admission - Early Bird
            </p>
          </div>
        </div>
        <div className='space-y-6 border-b-2 pb-6'>
          <p className='text-xl font-semibold'>Metode Pembayaran</p>
          <div className='border-[1px] p-4 rounded-[4px]'>Go-Pay</div>
        </div>
        <div className='py-6'>
          <p className='text-xl font-semibold'>Detail Pembayaran</p>
          <div>
            <div className='flex justify-center py-5 px-4 text-[#5D5D5D] font-bold bg-black bg-opacity-5'>
              <span className='flex-1 flex justify-center'>Ringkasan</span>
              <span className='flex-1 flex justify-center'>
                Harga per Tiket
              </span>
              <span className='flex-1 flex justify-center'>Kuantitas</span>
              <span className='flex-1 flex justify-center'>Jumlah</span>
            </div>
            <div className='flex justify-center items-center py-5 text-xs'>
              <span className='flex-1 flex justify-start px-4'>
                General Admission - Early Bird
              </span>
              <span className='flex-1 flex justify-end px-4'>Rp 250.000,-</span>
              <span className='flex-1 flex justify-center px-4'>3</span>
              <span className='flex-1 flex justify-end px-4'>Rp 750.000,-</span>
            </div>
            <div className='flex justify-center items-center py-5 text-xs'>
              <span className='flex-1 flex justify-start px-4'>Admin Fee</span>
              <span className='flex-1 flex justify-end px-4'></span>
              <span className='flex-1 flex justify-center px-4'></span>
              <span className='flex-1 flex justify-end px-4'>Rp 10.000,-</span>
            </div>
            <div className='flex justify-center items-center py-5 text-xs'>
              <span className='flex-1 flex justify-start px-4'>Pajak</span>
              <span className='flex-1 flex justify-end px-4'></span>
              <span className='flex-1 flex justify-center px-4'></span>
              <span className='flex-1 flex justify-end px-4'>Rp 90.000,-</span>
            </div>
            <div className='flex justify-center items-center py-5 text-sm '>
              <span className='flex-1 flex justify-start px-4 font-semibold'>
                Total Keselurhunan
              </span>
              <span className='flex-1 flex justify-end px-4'></span>
              <span className='flex-1 flex justify-center px-4'>3</span>
              <span className='flex-1 flex justify-end px-4'>Rp 850.000,-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailTransaction;
