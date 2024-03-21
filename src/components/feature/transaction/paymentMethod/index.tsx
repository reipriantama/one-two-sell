import React from 'react';
import Button from '../../ui/button';

const PaymentMethod = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between'>
        <div className='space-y-1'>
          <div className='text-2xl font-semibold'>Metode Pembayaran</div>
          <div className='text-xs text-[#757575] font-medium'>
            Silahkan cek detail tiket event yang akan kamu pesan
          </div>
        </div>
        <div className='flex'>
          <div className='text-sm text-[#757575]'>Sisa waktu pembelian</div>
        </div>
      </div>
      <div className='flex justify-between gap-6'>
        <div className='space-y-6 flex-1'>
          <Button
            buttonText='Credit/Debit Card'
            className='w-full text-[#757575] '
            outline
          />
          <Button
            buttonText='Virtual Account'
            className='w-full text-[#757575] '
            outline
          />
          <Button
            buttonText='Go-Pay'
            className='w-full text-[#757575] '
            outline
          />
        </div>
        <div className='space-y-6 flex-1'>
          <Button
            buttonText='Bank Transfer'
            className='w-full text-[#757575] '
            outline
          />
          <Button
            buttonText='Virtual Account'
            className='w-full text-[#757575] '
            outline
          />
          <Button
            buttonText='Indomaret'
            className='w-full text-[#757575] '
            outline
          />
        </div>
      </div>
      <div className='border-t-[1px]'>
        <p className='py-6 text-2xl font-semibold'>Konfirmasi Pembayaran</p>
        <div>table</div>
      </div>
      <div className='flex justify-between gap-6'>
        <div className='flex-1'>
          <Button
            buttonText='Kembali'
            className='w-full text-[#757575] flex justify-center'
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

export default PaymentMethod;
