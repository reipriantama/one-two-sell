import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/main/select';
import Button from '../../../../ui/main/button';
import { useState } from 'react';

const TicketAvailable = ({
  selectedTicketPrice,
  handleBuyTicket,
}: {
  selectedTicketPrice: number;
  handleBuyTicket: () => void;
}) => {
  const [count, setCount] = useState<number>(0);
  const [ticketData, setTicketData] = useState<any>({});

  const rupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const formatRupiah = (value: string) => {
    let numberFormat = value.replace(/[^0-9]/g, '');
    setCount(parseInt(numberFormat));
  };

  const onBlur = () => {
    setCount(count);
  };

  const decreaseCount = () => {
    if (count >= 10_000) {
      setCount((prevCount) => prevCount - 10_000);
    }
  };

  const increaseCount = () => {
    setCount(count + 10_000);
  };

  const totalTicketPrice = selectedTicketPrice + count;

  return (
    <div className='xl:w-[432px] border-2 rounded-xl p-6 space-y-6'>
      <div className='text-sm font-semibold'>Tiket tersedia</div>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <p>General Admission - Early Bird</p>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
        </div>
        <Select>
          <SelectTrigger className='gap-1 max-w-min'>
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
        <div className='text-[#2D4074] text-2xl font-bold'>
          {rupiah(totalTicketPrice)}
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-9 bg-[#D9D9D9] rounded-full'></div>
          <div>Johnny Doe</div>
        </div>
      </div>
      <p className='text-sm font-semibold'>Lanjutkan penawaran anda</p>
      <div className='space-y-1'>
        <p className='text-[#1E1E1E] text-base'>Masukan Bid Anda (Rp)</p>
        <div className='flex border-[1px] rounded-xl border-[#E3E3E3]'>
          <button
            onClick={decreaseCount}
            className='bg-[#D73A28] text-base text-white flex items-center justify-center size-11'
          >
            -
          </button>
          <input
            type='text'
            value={count === 0 ? '' : count}
            placeholder='Masukan Bid Anda'
            onChange={(e) => formatRupiah(e.target.value)}
            onBlur={onBlur}
            className='w-full border-[1px] h-[44px] border-[#E3E3E3] rounded-[4px] px-5 py-[10px] text-[14px]'
          />
          <button
            onClick={increaseCount}
            className='bg-[#33886E] text-base text-white flex items-center justify-center size-11'
          >
            +
          </button>
        </div>
        <p className='text-[#A6A6A6] text-[10px]'>Kelipatan Rp 10.000,-</p>
      </div>
      <div className='space-y-2'>
        <Button
          buttonText='Beli Tiket'
          className='flex justify-center w-full'
          primary
          onClick={handleBuyTicket}
        />
        <div className='flex justify-center text-[10px] text-[#A6A6A6]'>
          Anda punya 3 Voucher Bid
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-[#848484] text-sm'>Penawaran berakhir dalam</p>
        <p className='text-base font-semibold text-navy-blue'>
          18 May 2023, 21.00
        </p>
        <p className='text-[10px] text-[#D73A28]'>6 Hari, 12:20:30</p>
      </div>
    </div>
  );
};

export default TicketAvailable;
