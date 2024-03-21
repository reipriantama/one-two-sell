import React from 'react';
import { MdChevronRight } from 'react-icons/md';

const BreadcrumbUser = (props: any) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='text-sm text-[#4A62A2] font-medium'>Profile</div>
      <MdChevronRight className='size-5' />
      <p className='text-sm text-[#757575] font-medium'>
        {props.breadcrumbText}
      </p>
    </div>
  );
};

export default BreadcrumbUser;
