import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const DetailEventInput = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Detail Event' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Segment Event' placeholderText='Konser' />
        <InputDashboard labelText='Format Event' placeholderText='Offline' />
        <InputDashboard labelText='Topik Event' placeholderText='Jazz' />
      </div>
    </div>
  );
};

export default DetailEventInput;
