import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/main/select';
import Button from '../../../../ui/main/button';
import { useState } from 'react';

const DetailTicket = ({ onTicketSelect, eventData }: any) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const formatRupiah = (number: number): string => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  const handleTicketChange = (quantity: number) => {
    setSelectedQuantity(quantity);
    const totalPrice = eventData.price * quantity;
    onTicketSelect(totalPrice);
  };

  return (
    <div
      className='xl:w-[432px]
border-2 rounded-xl p-6 space-y-6'
    >
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <div>General Admission - Early Bird</div>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
          <div className='text-[#2D4074] text-base font-bold'>
            {eventData && eventData.price
              ? formatRupiah(eventData.price * selectedQuantity)
              : 'Loading...'}
          </div>
        </div>
        <Select onValueChange={(value) => handleTicketChange(Number(value))}>
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
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <div>VIP</div>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
          <div className='text-[#2D4074] text-base font-bold'>
            {eventData && eventData.price
              ? formatRupiah(eventData.price * selectedQuantity)
              : 'Loading...'}
          </div>
        </div>
        <Select onValueChange={(value) => handleTicketChange(Number(value))}>
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
      <div className='space-y-3'>
        <Button
          buttonText='Beli Tiket'
          className='flex justify-center w-full'
          primary
        />
        <div className='flex justify-center text-[10px] text-[#A6A6A6]'>
          Harga belum termasuk pajak dan admin fee
        </div>
      </div>
    </div>
  );
};
export default DetailTicket;
