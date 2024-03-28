import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TextAreaDashboard from '@/components/ui/dashboard/textAreaDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const AddDetailEvent = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Detail Event' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          inputType='text'
          labelText='Pilih Segment Event'
          placeholderText='Konser'
        />
        <InputDashboard
          inputType='text'
          labelText='Pilih Format Event'
          placeholderText='Offline'
        />
        <InputDashboard
          inputType='text'
          labelText='Topik Event'
          placeholderText='Tulis topik event'
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard
          inputType='text'
          labelText='Sesi Event'
          placeholderText='Pilih jam dari sesi event'
        />
        <div></div>
        <p className='text-xs text-[#5D5D5D]'>+ Sesi Event</p>
      </div>
      <TextAreaDashboard
        labelTextArea='Deskripsi Event'
        placeholderText='Sesi Event'
        className='h-[104px]'
      />
      <TextAreaDashboard
        labelTextArea='Syarat & Ketentuan Event'
        placeholderText='Sesi Event'
        className='h-[104px]'
      />
      <TextAreaDashboard
        labelTextArea='Syarat & Ketentuan Tempat'
        placeholderText='Sesi Event'
        className='h-[104px]'
      />
    </div>
  );
};

export default AddDetailEvent;
