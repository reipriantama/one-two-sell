import React from 'react';
import Button from '../../ui/button';

const OrderReview = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between'>
        <div className='space-y-1'>
          <div className='text-2xl font-semibold'>Order Review</div>
          <div className='text-xs text-[#757575] font-medium'>
            Pastikan pemesanan anda sudah benar
          </div>
        </div>
        <div className='flex'>
          <div className='text-sm text-[#757575]'>Sisa waktu pembelian</div>
        </div>
      </div>
      <div className='space-y-6'>
        <div className='space-y-2 border-b-[1px] pb-6'>
          <p className='text-[#757575]'>Event</p>
          <p className='text-2xl font-semibold text-[#2D4074]'>
            Parade Sihir - Bandung
          </p>
        </div>
        <div className='space-y-2 border-b-[1px] pb-6'>
          <p className='text-[#757575]'>Tiket</p>
          <div className='flex justify-between font-medium text-[#1E1E1E] items-center gap-6'>
            <p className=''>General Admission - Early Bird</p>
            <div>3</div>
            <div>Rp 750.000,-</div>
          </div>
        </div>
        <div className='space-y-2 border-b-[1px] pb-6'>
          <p className='text-[#757575]'>Informasi Pribadi</p>
          <p className='font-medium'>John Doe</p>
          <p className='font-medium'>johndoe@gmail.com</p>
          <p className='font-medium'>+62 813 1265 3546</p>
        </div>
      </div>
      <div className='space-y-6'>
        <p className='text-2xl text-[#141414] font-semibold'>
          Metode Pembayaran
        </p>
        <div className='space-y-3'>
          <div className='p-4 border-[1px] rounded-[4px]'>Go-Pay</div>
          <div className='p-4 border-[1px] rounded-[4px] text-xs text-[#4A62A2]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </div>
        </div>
      </div>
      <div className='border-t-[1px]'>
        <p className='py-6 text-2xl font-semibold'>Konfirmasi Pembayaran</p>
        <div>table</div>
      </div>
      <div className='flex justify-between'>
        <Button
          buttonText='Kembali'
          className='w-[432px] text-[#757575]'
          outline
        />
        <Button buttonText='Selanjutnya' className='w-[432px]' primary />
      </div>
    </div>
  );
};

export default OrderReview;
