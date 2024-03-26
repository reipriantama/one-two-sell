import Image from 'next/image';
import React from 'react';

const SideBarDashboard = () => {
  const titleSideAccount = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconAccount.svg',
      title: 'List Akun',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconPembayaran.svg',
      title: 'Pembayaran',
      link: '/dashboard',
    },
  ];

  const titleSideEvent = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconAllEvent.svg',
      title: 'Seluruh Event',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconEvent.svg',
      title: 'Event Pilihan',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconSegmentation.svg',
      title: 'Segmentasi',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconMic.svg',
      title: 'Tipe Event',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconBannerEvent.svg',
      title: 'Banner Event',
      link: '/dashboard',
    },
  ];

  const titleSideTicket = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconSelling.svg',
      title: 'Verfikasi Penjualan',
      link: '/dashboard',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconPurchase.svg',
      title: 'Verifikasi Pembelian',
      link: '/dashboard',
    },
  ];

  return (
    <div className='p-5 shadow-sm w-[240px] h-[90vh] flex flex-col justify-between sticky top-[72px]'>
      <div className=''>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Akun</p>
          <div className='space-y-1'>
            {titleSideAccount.map((item, index) => (
              <div
                key={index}
                className='group hover:bg-[#2D4074] hover:rounded-[4px] 
                px-3 py-2 py flex items-center gap-2 cursor-pointer'
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  width={32}
                  height={32}
                  className={`
                  invert-[62%]
                  group-hover:filter
                  group-hover:brightness-[0]
                  group-hover:invert-[100%]`}
                />
                <p className='group-hover:text-white group-hover:font-bold text-sm text-[#989898] '>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Event</p>
          <div className=' space-y-1'>
            {titleSideEvent.map((item, index) => (
              <div
                key={index}
                className='group hover:bg-[#2D4074] hover:rounded-[4px] 
                px-3 py-2 py flex items-center gap-2 cursor-pointer'
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  width={32}
                  height={32}
                  className={`
                  group-hover:filter
                  group-hover:brightness-[0]
                  group-hover:invert-[100%]`}
                />
                <p className='group-hover:text-white group-hover:font-bold text-sm text-[#989898] '>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Tiket</p>
          <div className=' space-y-1'>
            {titleSideTicket.map((item, index) => (
              <div
                key={index}
                className='group hover:bg-[#2D4074] hover:rounded-[4px] 
                px-3 py-2 py flex items-center gap-2 cursor-pointer'
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  width={32}
                  height={32}
                  className={`
                  group-hover:filter
                  group-hover:brightness-[0]
                  group-hover:invert-[100%]`}
                />
                <p className='group-hover:text-white group-hover:font-bold text-sm text-[#989898]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 p-3'>
        <Image
          src={'/assets/dashboard/layout/sidebar/profileImage.png'}
          alt='icon'
          width={24}
          height={24}
          className='rounded-full'
        />
        <div className='text-[#989898] space-y-1'>
          <p className='w-[102px] text-sm font-bold'>John Doe</p>
          <div className='text-xs'>Admin</div>
        </div>
        <div>
          <Image
            src={'/assets/dashboard/layout/sidebar/iconLogout.svg'}
            alt='icon'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboard;
