import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Button from '../../../../ui/button';
import Image from 'next/image';

const TicketAvailable = () => {
  return (
    <div
      className='xl:w-[432px]
  border-2 rounded-xl p-6 space-y-6'
    >
      <div className='text-sm font-semibold'>Tiket tersedia</div>
      <div className='flex justify-between items-center'>
        <div className='space-y-1'>
          <p>General Admission - Early Bird</p>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
        </div>
        <Select>
          <SelectTrigger className='max-w-min gap-1'>
            <SelectValue placeholder='1' />
          </SelectTrigger>
          <SelectContent className='bg-white '>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
            <SelectItem value='3'>3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-2'>
        <p className='text-sm text-[#848484]'>Bid Saat Ini</p>
        <div className='text-[#2D4074] text-2xl font-bold'>Rp 250.000,-</div>
        <div className='flex gap-2 items-center'>
          <div className='size-9 bg-[#D9D9D9] rounded-full'></div>
          <div>Johnny Doe</div>
        </div>
      </div>
      <p className='text-sm font-semibold'>Lanjutkan penawaran anda</p>
      <div className='space-y-1'>
        <p className='text-[#1E1E1E] text-base'>Masukan Bid Anda (Rp)</p>
        <div className='flex border-[1px] rounded-xl border-[#E3E3E3]'>
          <div className='bg-[#D73A28] text-base text-white flex items-center justify-center size-11'>
            -
          </div>
          <input
            type='number'
            placeholder='Masukan Bid Anda'
            className='w-full border-[1px] h-[44px] border-[#E3E3E3] rounded-[4px] px-5 py-[10px] text-[14px] '
          />
          <div className='bg-[#33886E] text-base text-white flex items-center justify-center size-11'>
            +
          </div>
        </div>
        <p className='text-[#A6A6A6] text-[10px]'>Kelipatan Rp 10.000,-</p>
      </div>
      <div className='space-y-2'>
        <Button
          buttonText='Beli Tiket'
          className='w-full flex justify-center'
          primary
        />
        <div className='flex justify-center text-[10px] text-[#A6A6A6]'>
          Anda punya 3 Voucher Bid
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-[#848484] text-sm'>Penawaran berakhir dalam</p>
        <p className='text-navy-blue text-base font-semibold'>
          18 May 2023, 21.00
        </p>
        <p className='text-[10px] text-[#D73A28]'>6 Hari, 12:20:30</p>
      </div>
    </div>
  );
};
export default TicketAvailable;
