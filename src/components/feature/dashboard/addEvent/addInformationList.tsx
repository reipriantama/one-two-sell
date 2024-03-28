import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const AddInformationList = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Event' />
      <InputDashboard
        labelText='Nama Event'
        placeholderText='Masukan nama event disini'
        inputType='text'
      />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          labelText='Foto Event'
          placeholderText='Masukan Foto Event Anda'
          inputType='file'
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          labelText='Tanggal Event'
          placeholderText='Masukan Tanggal Event '
          inputType='text'
        />
        <InputDashboard
          labelText='Jam Event'
          placeholderText='Masukan Jam Event '
          inputType='text'
        />
        <InputDashboard
          labelText='Lokasi Event'
          placeholderText='Masukan Lokasi Event '
          inputType='text'
        />
        <InputDashboard
          labelText='Daerah Event'
          placeholderText='Masukan Daerah Event '
          inputType='text'
        />
      </div>
    </div>
  );
};

export default AddInformationList;
