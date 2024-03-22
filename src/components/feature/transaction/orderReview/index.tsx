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
          <div className='flex justify-center items-center py-5 text-sm font-semibold'>
            <span className='flex-1 flex justify-start px-4 font-semibold'>
              Total Keselurhunan
            </span>
            <span className='flex-1 flex justify-end px-4'></span>
            <span className='flex-1 flex justify-center px-4'>3</span>
            <span className='flex-1 flex justify-end px-4'>Rp 850.000,-</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-6'>
        <div className='flex-1'>
          <Button
            buttonText='Kembali'
            className='w-full flex justify-center text-[#757575]'
            outline
          />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Selanjutnya'
            className='w-full flex justify-center'
            primary
          />
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
