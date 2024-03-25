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
    <div className='p-5 shadow-sm w-[240px] h-[90vh] flex flex-col justify-between'>
      <div className=''>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Akun</p>
          <div className='px-3 space-y-1'>
            {titleSideAccount.map((item, index) => (
              <div
                key={index}
                className='hover:bg-[#2D4074] flex items-center gap-2'
              >
                <Image src={item.icon} alt='icon' width={32} height={32} />
                <p className='hover:text-white hover:font-bold text-sm text-[#989898] font-normal'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Event</p>
          <div className='px-3 space-y-1'>
            {titleSideEvent.map((item, index) => (
              <div
                key={index}
                className='hover:bg-[#2D4074] flex items-center gap-2'
              >
                <Image src={item.icon} alt='icon' width={32} height={32} />
                <p className='hover:text-white hover:font-bold text-sm text-[#989898]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Tiket</p>
          <div className='px-3 space-y-122'>
            {titleSideTicket.map((item, index) => (
              <div
                key={index}
                className='hover:bg-[#2D4074] flex items-center gap-2'
              >
                <Image src={item.icon} alt='icon' width={32} height={32} />
                <p className='hover:text-white hover:font-bold text-sm text-[#989898]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>asdfas</div>
    </div>
  );
};

export default SideBarDashboard;
