import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const UserCard = () => {
  const cardData = [
    {
      id: 1,
      name: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/5c28/3c82/90442bba0559d5384a5a3f3a5e96806f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WpqEmaR0qx85gKdSmOaw06VlgR0R46j5V5--gmn2syzTFPbDz3Jl-uk180IQyB0rUKgp5uUzSb3Ut83R9LKD1xF8ExUrfM-Rzpmlsiy-yKvIQMSUHEm7UYS3bYx5cqD2gfwfMgP23eKPC05aC0jryDaKhkKS8jUUWDA2jTVwd3iIGB~GtT7ZwQ1PNL6wH-LxXeMZI2vPxOt9txFWyPdTZaa68snT3Ys-AgnINpsx-BQm3-YyW-akIEEBd-gYdbCPw-Gez2fU3Rfe9h7mDh90ic32VT7IHAw9iy4qFvQXu27IYVR6srmu~-fJZTm2xEsYGJa7iI~8ji-0xzyv7JxOIQ__',
      date: '18 May, 2023 • 7.30 PM',
      title: 'Parade Sihir - Bandung',
      location: 'Lapangan Pussenif - Bandung',
      price: 250000,
    },
    {
      id: 2,
      name: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/5c28/3c82/90442bba0559d5384a5a3f3a5e96806f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WpqEmaR0qx85gKdSmOaw06VlgR0R46j5V5--gmn2syzTFPbDz3Jl-uk180IQyB0rUKgp5uUzSb3Ut83R9LKD1xF8ExUrfM-Rzpmlsiy-yKvIQMSUHEm7UYS3bYx5cqD2gfwfMgP23eKPC05aC0jryDaKhkKS8jUUWDA2jTVwd3iIGB~GtT7ZwQ1PNL6wH-LxXeMZI2vPxOt9txFWyPdTZaa68snT3Ys-AgnINpsx-BQm3-YyW-akIEEBd-gYdbCPw-Gez2fU3Rfe9h7mDh90ic32VT7IHAw9iy4qFvQXu27IYVR6srmu~-fJZTm2xEsYGJa7iI~8ji-0xzyv7JxOIQ__',
      date: '18 May, 2023 • 7.30 PM',
      title: 'Parade Sihir - Bandung',
      location: 'Lapangan Pussenif - Bandung',
      price: 250000,
    },
    {
      id: 3,
      name: 'John Doe',
      image:
        'https://s3-alpha-sig.figma.com/img/5c28/3c82/90442bba0559d5384a5a3f3a5e96806f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WpqEmaR0qx85gKdSmOaw06VlgR0R46j5V5--gmn2syzTFPbDz3Jl-uk180IQyB0rUKgp5uUzSb3Ut83R9LKD1xF8ExUrfM-Rzpmlsiy-yKvIQMSUHEm7UYS3bYx5cqD2gfwfMgP23eKPC05aC0jryDaKhkKS8jUUWDA2jTVwd3iIGB~GtT7ZwQ1PNL6wH-LxXeMZI2vPxOt9txFWyPdTZaa68snT3Ys-AgnINpsx-BQm3-YyW-akIEEBd-gYdbCPw-Gez2fU3Rfe9h7mDh90ic32VT7IHAw9iy4qFvQXu27IYVR6srmu~-fJZTm2xEsYGJa7iI~8ji-0xzyv7JxOIQ__',
      date: '18 May, 2023 • 7.30 PM',
      title: 'Parade Sihir - Bandung',
      location: 'Lapangan Pussenif - Bandung',
      price: 250000,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='space-y-6'>
      {cardData.map((data, index) => (
        <div
          key={index}
          className='flex gap-6 p-3 border-[1px] shadow-md rounded-2xl'
        >
          <div className='w-[318px]'>
            <Image
              src={data.image}
              alt='logo'
              width={318}
              height={160}
              className='rounded-xl bg-[#D9D9D9] w-[318px] h-[160px] object-cover'
            />
          </div>
          <div className='space-y-1 w-full'>
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <div className='space-y-1'>
                  {/* Gunakan moment  */}
                  <div className='text-sm font-semibold text-[#4A62A2]'>
                    18 May, 2023 • 7.30 PM
                  </div>
                  <p className='text-xl font-semibold text-navy-blue'>
                    Parade Sihir - Bandung
                  </p>
                  <p className='text-sm text-[#848484]'>
                    Lapangan Pussenif - Bandung
                  </p>
                </div>
                <div className='space-y-1'>
                  <p className='text-[10px] text-[#848484]'>Bid Saat ini</p>
                  <div className='text-lg font-bold text-[#2D4074]'>
                    Rp 250.000
                  </div>
                </div>
              </div>
              <div className='text-xs bg-[#4A62A2] flex items-center text-white px-2 rounded-[4px] max-h-7'>
                Proses Bid
              </div>
            </div>
            <p
              className='underline text-sm text-[#848484] font-normal cursor-pointer'
              onClick={() => setIsOpen(true)}
            >
              Lihat Halaman
            </p>
          </div>
        </div>
      ))}

      {isOpen && (
        <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-full rounded-3xl max-w-[708px] bg-white p-6 space-y-6'>
            <div className='flex justify-between items-center'>
              <p className='text-2xl font-semibold'>Detail Transaksi</p>
              <IoClose className=' text-[#1C1B1F]' onClick={closeModal} />
            </div>
            <div className='space-y-6 '>
              <div className='border-b-[1px] pb-6'>
                <p className='text-[#757575]'>Event</p>
                <p className='text-2xl font-semibold text-navy-blue'>
                  Parade Sihir - Bandung
                </p>
              </div>
              <div className='border-b-[1px] pb-6'>
                <p className='text-[#757575]'>Tiket</p>
                <p className='font-medium text-[#1E1E1E]'>
                  General Admission - Early Bird
                </p>
              </div>
            </div>
            <div className='space-y-6 border-b-2 pb-6'>
              <p className='text-xl font-semibold'>Metode Pembayaran</p>
              <div className='border-[1px] p-4 rounded-[4px]'>Go-Pay</div>
            </div>
            <div className='py-6'>
              <p className='text-xl font-semibold'>Detail Pembayaran</p>
              <div>table</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
