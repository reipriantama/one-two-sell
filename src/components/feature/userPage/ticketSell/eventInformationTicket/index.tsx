import Button from '@/components/feature/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/feature/ui/select';
import React from 'react';

const EventInformationTicket = () => {
  const listEventData = [
    {
      title: 'Parade Sihir',
      status: 'General Admission - Early Bid',
      location: 'Jakarta',
      category: 'Festival',
      venue: 'Lapangan Pussenif',
    },
    {
      title: 'Parade Sihir',
      status: 'General Admission - Early Bid',
      location: 'Bandung',
      category: 'Festival',
      venue: 'Lapangan Pussenif',
    },
    {
      title: 'Parade Sihir',
      status: 'General Admission - Early Bid',
      location: 'Bandung',
      category: 'Festival',
      venue: 'Lapangan Pussenif',
    },
    {
      title: 'Parade Sihir',
      status: 'VIP',
      location: 'Bandung',
      category: 'Festival',
      venue: 'Lapangan Pussenif',
    },
  ];
  return (
    <div className='space-y-6'>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <h1 className='text-xl font-semibold'>Informasi Event</h1>
          <p className='text-xs text-[#555555]'>
            Silahkan pilih tiket yang akan anda jual
          </p>
        </div>
        <div className='flex gap-6'>
          <div className='flex items-center gap-3'>
            <p className='text-sm font-medium'>Urutkan</p>
            <Select>
              <SelectTrigger className='max-w-min h-full gap-1'>
                <SelectValue
                  placeholder='Terpopuler'
                  className='text-[#2D4074] text-sm font-medium'
                />
              </SelectTrigger>
              <SelectContent className='bg-white '>
                <SelectItem value='Terpopuler'>Terpopuler</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        {listEventData.map((item, index) => (
          <div
            key={index}
            className='border-2 rounded-2xl shadow-md p-6 space-y-4 hover:border-[#2D4074]'
          >
            <p className='text-[#2D4074] text-xl font-semibold pb-[16px] border-b-[1px]'>
              {item.title} - {item.location}
            </p>
            <div className='flex items-center gap-2 pb-[16px] border-b-[1px]'>
              <div className='text-xs text-[#555555]'>Jenis Festival :</div>
              <div className='text-base font-bold text-[#2D4074]'>
                {item.category}
              </div>
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
                  {item.venue}
                </p>
                <p className='text-xs text-[#555555]'>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between gap-6'>
        <div className='flex-1'>
          <Button
            buttonText='Kembali'
            className='w-full text-[#757575] flex justify-center'
            outline
          />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Selanjutnya'
            className='w-full flex justify-center'
            primary
          />
        </div>
      </div>
    </div>
  );
};

export default EventInformationTicket;
