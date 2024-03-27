import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const GeneralInformation = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Umum' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          labelText='Username'
          placeholderText='Masukan Username Anda'
        />
        <InputDashboard
          labelText='Email'
          placeholderText='Masukan Email Anda'
        />
        <InputDashboard
          labelText='Nomor Handphone'
          placeholderText='Masukan Nomor Handphone Anda'
        />
        <InputDashboard
          labelText='Status'
          placeholderText='Masukan Verified Anda'
        />
      </div>
    </div>
  );
};

export default GeneralInformation;
