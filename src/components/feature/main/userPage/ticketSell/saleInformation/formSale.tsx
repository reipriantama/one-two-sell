import React from 'react';

const FormSale = () => {
  return (
    <form className='space-y-6 mt-6 border-b-[1px] pb-6'>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Id Invoice
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='12345678'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label htmlFor='' className='text-[#2D4074] text-xl font-semibold'>
            Foto Invoice
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2 border-dashed border-[1px] rounded-[4px] px-4 py-3 '>
          <input
            type='file'
            name='invoiceFoto'
            id='invoiceFoto'
            placeholder=''
            className='w-full h-full rounded-[4px] bg-[#E0E0E0]'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Nama Pembeli
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='text'
            name='invoiceId'
            id='invoiceId'
            placeholder='Name'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Nomor KTP Pembeli
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='12345678'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Email Pembeli
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='email'
            name='invoiceId'
            id='invoiceId'
            placeholder='Your Email'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label htmlFor='' className='text-[#2D4074] text-xl font-semibold'>
            Foto Pembeli
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2 border-dashed border-[1px] rounded-[4px] px-4 py-3 '>
          <input
            type='file'
            name='invoiceFoto'
            id='invoiceFoto'
            placeholder=''
            className='w-full h-full rounded-[4px] bg-[#E0E0E0]'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Sistem Pembelian
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2 '>
          <select className='border-[1px] rounded-[4px] px-4 py-3 w-full'>
            <option value='beliLangsung'>Beli Langsung</option>
          </select>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Harga Tiket
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='Rp 2.00.000,-'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            Jumlah Tiket Dijual
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='1234'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            ID Tiket #1
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='1234'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 pt-6 border-t-[1px] border-[#BABABA] '>
        <div className='space-y-4 col-span-1'>
          <label className='text-[#2D4074] text-xl font-semibold'>
            ID Tiket #2
          </label>
          <div className='text-[11px] text-[#989898] text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p>
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <input
            type='number'
            name='invoiceId'
            id='invoiceId'
            placeholder='1234'
            className='w-full border-[1px] rounded-[4px] px-4 py-3'
          />
        </div>
      </div>
    </form>
  );
};

export default FormSale;
