import React from 'react';

const SaleInformation = () => {
  return (
    <div>
      <div className='space-y-6'>
        <h1 className='text-xl font-semibold'>Informasi Event</h1>
        <div className='grid grid-cols-2 gap-6'>
          <div className='border-2 rounded-2xl shadow-md p-6 space-y-4 hover:border-[#2D4074]'>
            <p className='text-[#2D4074] text-xl font-semibold pb-[16px] border-b-[1px]'>
              Parade Sihir - Bandung
            </p>
            <div className='flex items-center gap-2 pb-[16px] border-b-[1px]'>
              <div className='text-xs text-[#555555]'>Jenis Festival :</div>
              <div className='text-base font-bold text-[#2D4074]'>Festival</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-[#2D4074] text-2xl font-bold border-r-[1px] pr-3'>
                <p className=''>MEI</p>
                <div className='flex items-center gap-1 '>
                  <p>18</p>
                  <p className='text-xs font-medium'>2023</p>
                </div>
              </div>
              <div>
                <div className='space-y-2'>
                  <div className='text-base font-bold text-[#2D4074]'>
                    7.30 - 09.00 PM
                  </div>
                  <div className='text-xs text-[#555555]'>Session 1</div>
                </div>
              </div>
              <div className='space-y-1'>
                <p className='text-sm text-[#424242] font-semibold'>
                  Lapangan Pussenif
                </p>
                <p className='text-xs text-[#555555]'>Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form className='space-y-6 mt-6'>
          <div className='flex gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
            <div className='space-y-4 flex-1'>
              <label
                htmlFor=''
                className='text-[#2D4074] text-xl font-semibold'
              >
                Id Invoice
              </label>
              <p className='text-[11px] text-[#989898] text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis sequi, autem illo, nam distinctio libero praesentium
                incidunt ex deleniti assumenda consequatur quaerat tempore
                facere quae amet sed esse officia porro.
              </p>
            </div>
            <div className='flex-auto '>
              <input
                type='number'
                name='invoice'
                id='invoice'
                placeholder='12345678'
                className='w-full border-[1px] rounded-[4px] px-4 py-3'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaleInformation;
