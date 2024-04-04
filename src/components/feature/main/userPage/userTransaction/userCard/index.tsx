import Image from 'next/image';
import React from 'react';

const UserCard = (props: any) => {
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
                {props.progress ? 'Proses Bid' : 'Menunggu'}
              </div>
            </div>
            <p
              className='underline text-sm text-[#848484] font-normal cursor-pointer'
              onClick={props.openModal}
            >
              {props.detailCardText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
