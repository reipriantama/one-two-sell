import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const InformationTypeEvent = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Tipe' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Nama Tipe' inputType='text' />
        <InputDashboard labelText='Status' inputType='text' />
      </div>
    </div>
  );
};

export default InformationTypeEvent;
