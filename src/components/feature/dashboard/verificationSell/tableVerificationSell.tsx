import React from 'react';

const TableVerificationSell = () => {
  return (
    <div>
      <div className='flex justify-center py-5 px-4 text-[#5D5D5D] font-bold bg-black bg-opacity-5'>
        <span className='flex-1 flex justify-center'>Ringkasan</span>
        <span className='flex-1 flex justify-center'>Jumlah</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>Harga Tiket</span>
        <span className='flex-1 flex justify-end px-4'>Rp 850.000,-</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>Admin Fee</span>
        <span className='flex-1 flex justify-end px-4'>Rp 10.000,-</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>Pajak</span>
        <span className='flex-1 flex justify-end px-4'>Rp 90.000,-</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>Total Penarikan</span>
        <span className='flex-1 flex justify-end px-4'>Rp 950.000,-</span>
      </div>
    </div>
  );
};

export default TableVerificationSell;
