import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import Button from '@/components/ui/main/button';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ConfirmModal = (props: any) => {
  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full max-w-[708px] bg-white p-6 space-y-6 rounded-xl'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-semibold'>Konfirmasi Penjualan</p>
          <div>
            <IoClose
              className='size-6 cursor-pointer hover:text-red-500'
              onClick={props.closeModal}
            />
          </div>
        </div>
        <p className='text-base text-[#555555]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className='space-y-4'>
          <InputDashboard labelText='Nama Pembeli' inputType='text' />
          <InputDashboard labelText='Nomor KTP Pembeli' inputType='text' />
          <InputDashboard labelText='Email Pembeli' inputType='text' />
          <InputDashboard labelText='Nomor Handphone' inputType='text' />
        </div>
        <div className='flex w-full justify-between gap-6'>
          <div className='flex-1'>
            <Button
              buttonText='Kembali'
              className='w-full justify-center'
              outline
              onClick={props.closeModal}
            />
          </div>
          <div className='flex-1'>
            <Button
              buttonText='Ganti Invoice'
              className='w-full justify-center'
              confirm
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
