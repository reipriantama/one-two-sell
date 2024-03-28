import DescriptionEvent from '@/components/feature/dashboard/eventList/descriptionEvent';
import DetailEventInput from '@/components/feature/dashboard/eventList/detailEvent';
import InformationEvent from '@/components/feature/dashboard/eventList/informationEvent';
import TableEvent from '@/components/feature/dashboard/eventList/tableEvent';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import Button from '@/components/ui/main/button';
import React from 'react';

const DetailSelectedEventPage = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Akun'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Semua Event'
          breadCrumbLink='/dashboard/all-event'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationEvent />
          <DetailEventInput />
          <TableEvent />
          <DescriptionEvent />
          <div className='flex w-full justify-between gap-6'>
            <div className='flex-1'>
              <Button
                buttonText='Hapus Event'
                className='w-full justify-center'
                danger
              />
            </div>
            <div className='flex-1'>
              <Button
                buttonText='Buat Menjadi Event Pilihan'
                className='w-full justify-center'
                primary
              />
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailSelectedEventPage;
