import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const InformationBanner = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Banner' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          labelText='Nama Banner'
          placeholderText='Masukan Nama Banner'
          inputType='text'
        />
        <InputDashboard
          labelText='Foto Banner'
          placeholderText='Upload Gambar'
          inputType='file'
        />
        <InputDashboard
          labelText='Nama Event'
          placeholderText='Pilih nama event disini'
          inputType='text'
        />
        <InputDashboard
          labelText='Status'
          placeholderText='Pilih status event disini'
          inputType='text'
        />
      </div>
    </div>
  );
};

export default InformationBanner;
