import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import Button from '@/components/ui/main/button';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const InformationPay = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Event' />
      <InputDashboard labelText='Nama Event' inputType='text' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Id Invoice' inputType='text' />
        <InputDashboard labelText='Foto Invoice' inputType='file' />
      </div>
      <TitleAccountList titleText='Informasi Pembeli Tiket' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Nama Pembeli' inputType='text' />
        <InputDashboard labelText='Nomor KTP Pembeli' inputType='text' />
        <InputDashboard labelText='Email Pembeli' inputType='text' />
        <InputDashboard labelText='Foto KTP' inputType='file' />
      </div>
      <TitleAccountList titleText='Informasi Tiket' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='ID Tiket #1' inputType='text' />
        <InputDashboard labelText='ID Tiket #2' inputType='text' />
      </div>
      <TitleAccountList titleText='Informasi Penjualan' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Sistem Pembelian' inputType='text' />
        <InputDashboard labelText='Harga Tiket Terendah' inputType='text' />
        <InputDashboard labelText='Beli Langsung' inputType='text' />
      </div>
      <div className='flex w-full justify-between gap-6'>
        <div className='flex-1'>
          <Button
            buttonText='Tolak Event'
            className='w-full justify-center'
            danger
          />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Konfirmasi Event'
            className='w-full justify-center'
            confirm
          />
        </div>
      </div>
    </div>
  );
};

export default InformationPay;
