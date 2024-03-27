import DescriptionEvent from '@/components/feature/dashboard/eventList/descriptionEvent';
import DetailEventInput from '@/components/feature/dashboard/eventList/detailEvent';
import InformationEvent from '@/components/feature/dashboard/eventList/informationEvent';
import TableEvent from '@/components/feature/dashboard/eventList/tableEvent';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailEvent = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Akun'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard breadCrumbText='Semua Event' />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationEvent />
          <DetailEventInput />
          <TableEvent />
          <DescriptionEvent />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailEvent;
