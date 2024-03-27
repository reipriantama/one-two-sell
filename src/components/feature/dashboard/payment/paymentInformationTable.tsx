import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';
import UserCard from '../../main/userPage/userTransaction/userCard';
import Button from '@/components/ui/main/button';

const PaymentInformationTable = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Penjualan Terakhir' />
      <div>
        <div className='flex justify-center py-5 px-4 text-[#5D5D5D] font-bold bg-black bg-opacity-5'>
          <span className='flex-1 flex justify-center'>Ringkasan</span>
          <span className='flex-1 flex justify-center'>Harga per Tiket</span>
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
      <Button
        buttonText='Payment'
        className='w-full flex justify-center'
        primary
      />
    </div>
  );
};

export default PaymentInformationTable;
