import React from 'react';
import Button from '../../ui/button';

const PersonalInformation = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between gap-6'>
        <div className='space-y-1'>
          <div className='text-2xl font-semibold'>Informasi Pribadi</div>
          <div className='text-xs text-[#757575] font-medium'>
            Silahkan isi informasi pribadi anda
          </div>
        </div>
        <div className='flex'>
          <div className='text-sm text-[#757575]'>Sisa waktu pembelian</div>
        </div>
      </div>
      <div className='flex justify-between gap-6'>
        <div className='space-y-1 w-[432px] flex-1'>
          <label htmlFor='firsname' className='text-[#2D4074] '>
            Nama Depan
          </label>
          <input
            type='text'
            id='firsname'
            name='firsname'
            placeholder='Masukan nama depan anda'
            className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
          />
        </div>
        <div className='space-y-1 w-[432px] flex-1'>
          <label htmlFor='lastname' className='text-[#2D4074] '>
            Nama Belakang
          </label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            placeholder='Masukan nama belakang anda'
            className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
          />
        </div>
      </div>
      <div className='flex justify-between gap-6'>
        <div className='space-y-1 w-[432px] flex-1'>
          <label htmlFor='email' className='text-[#2D4074] '>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Masukan email anda'
            className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
          />
          <p className='text-xs text-[#757575]'>
            E-Ticket akan dikirimkan ke email anda
          </p>
        </div>
        <div className='space-y-1 w-[432px] flex-1'>
          <label htmlFor='phone' className='text-[#2D4074] '>
            Nama Belakang
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='Masukan nomor telepon anda'
            className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
          />
        </div>
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

export default PersonalInformation;
