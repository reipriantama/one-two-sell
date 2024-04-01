import ButtonDashboard from '@/components/ui/dashboard/button';
import Image from 'next/image';
import React from 'react';

const TitleDashboard = (props: any) => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-navy-blue py-4 text-sm font-bold'>{props.title}</h1>
      <div className='flex gap-4 text-xs text-[#989898]'>
        {props.children}
        {/* {props?.show && <ButtonDashboard buttonText={props.buttonText} />} */}
        <div className='flex gap-1 items-center'>
          <Image
            src='/assets/dashboard/accountListPage/iconFilter.svg'
            alt='logo'
            width={16}
            height={16}
          />
          <p>Filter</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src='/assets/dashboard/accountListPage/iconDownload.svg'
            alt='logo'
            width={16}
            height={16}
          />
          Export sebagai CSV.
        </div>
      </div>
    </div>
  );
};

export default TitleDashboard;
