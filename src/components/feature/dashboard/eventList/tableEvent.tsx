import React from 'react';

const TableEvent = () => {
  return (
    <div>
      <div className='flex justify-start py-5 px-4 text-[#5D5D5D] font-bold bg-black bg-opacity-5'>
        <span className='flex-1 flex justify-start'>No</span>
        <span className='flex-1 flex justify-start'>Sesi Event</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>1</span>
        <span className='flex-1 flex justify-start px-4'>15.00 - 16.00</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>2</span>
        <span className='flex-1 flex justify-start px-4'>16.00 - 17.00</span>
      </div>
      <div className='flex justify-start items-center py-5 text-xs'>
        <span className='flex-1 flex justify-start px-4'>3</span>
        <span className='flex-1 flex justify-start px-4'>17.00 -18.00</span>
      </div>
    </div>
  );
};

export default TableEvent;
