import Link from 'next/link';
import React from 'react';

const TitleEvent = (props: any) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className={`text-2xl font-semibold ${props.className}`}>
        {props.titleText}
      </div>
      {/* link ke halaman lihat semua */}
      <Link
        href='/event'
        className={`text-sm text-[#757575] font-medium ${props.className}`}
      >
        Lihat Semua
      </Link>
    </div>
  );
};

export default TitleEvent;
