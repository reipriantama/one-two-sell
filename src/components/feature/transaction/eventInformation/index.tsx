import React from 'react';

const EventInformation = () => {
  return (
    <div className='flex justify-between py-12'>
      <div className='space-y-1'>
        <div className='text-2xl font-semibold'>Event Kamu</div>
        <div className='text-xs text-[#757575] font-medium'>
          Silahkan cek detail tiket event yang akan kamu pesan
        </div>
      </div>
      <div className='flex'>
        <div className='text-sm text-[#757575]'>Sisa waktu pembelian</div>
      </div>
    </div>
  );
};

export default EventInformation;
