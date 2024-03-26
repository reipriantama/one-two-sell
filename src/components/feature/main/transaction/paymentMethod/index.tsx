import React from 'react';
import Button from '../../../../ui/main/button';

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
      </div>
      <div className='flex justify-between gap-6'>
        <div className='flex-1'>
          <Button
            buttonText='Kembali'
            className='w-full justify-center'
            outline
          />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Selanjutnya'
            className='w-full justify-center'
            primary
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
