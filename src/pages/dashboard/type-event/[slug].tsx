import InformationSegmentation from '@/components/feature/dashboard/segmentation/informationSegmentation';
import InformationTypeEvent from '@/components/feature/dashboard/typeEvent/informationTypeEvent';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import Button from '@/components/ui/main/button';
import React from 'react';

const DetailTypeEvent = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Type Event'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Tipe Acara'
          breadCrumbLink='/dashboard/type-event'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationTypeEvent />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Hapus Segmentasi'
            className='w-full justify-center'
            danger
          />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailTypeEvent;
