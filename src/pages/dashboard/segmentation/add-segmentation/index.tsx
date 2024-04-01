import InformationSegmentation from '@/components/feature/dashboard/segmentation/informationSegmentation';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import Button from '@/components/ui/main/button';
import React from 'react';

const AddSegmentationPage = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Segmentasi'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbText='Segmentasi'
          breadCrumbTextLink='Segmentation'
          breadCrumbLink='/dashboard/segmentation'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationSegmentation />
        </div>
        <div className='flex w-full justify-between gap-6'>
          <div className='flex-1'>
            <Button
              buttonText='Kembali'
              className='w-full justify-center'
              danger
            />
          </div>
          <div className='flex-1'>
            <Button
              buttonText='Simpan'
              className='w-full justify-center'
              primary
            />
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default AddSegmentationPage;
