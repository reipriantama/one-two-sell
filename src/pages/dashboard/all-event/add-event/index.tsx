import AddDetailEvent from '@/components/feature/dashboard/addEvent/addDetailEvent';
import AddInformationList from '@/components/feature/dashboard/addEvent/addInformationList';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import Button from '@/components/ui/main/button';
import React from 'react';

const AddEvent = () => {
  return (
    <>
      <LayoutDashboard
        title='Tambah Event'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbText='Tambah Event'
          breadCrumbTextLink='Semua Event'
          breadCrumbLink='/dashboard/all-event'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <AddInformationList />
          <AddDetailEvent />
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
        </div>
      </LayoutDashboard>
    </>
  );
};

export default AddEvent;
