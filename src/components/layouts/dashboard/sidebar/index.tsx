import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SideBarDashboard = () => {
  const router = useRouter();

  const titleSideAccount = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconAccount.svg',
      title: 'List Akun',
      link: '/dashboard/account-list',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconPembayaran.svg',
      title: 'Pembayaran',
      link: '/dashboard/payment',
    },
  ];

  const titleSideEvent = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconAllEvent.svg',
      title: 'Seluruh Event',
      link: '/dashboard/all-event',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconEvent.svg',
      title: 'Event Pilihan',
      link: '/dashboard/selected-events',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconSegmentation.svg',
      title: 'Segmentasi',
      link: '/dashboard/segmentation',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconMic.svg',
      title: 'Tipe Event',
      link: '/dashboard/type-event',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconBannerEvent.svg',
      title: 'Banner Event',
      link: '/dashboard/event-banner',
    },
  ];

  const titleSideTicket = [
    {
      icon: '/assets/dashboard/layout/sidebar/iconSelling.svg',
      title: 'Verifikasi Penjualan',
      link: '/dashboard/verification-sell',
    },
    {
      icon: '/assets/dashboard/layout/sidebar/iconPurchase.svg',
      title: 'Verifikasi Pembelian',
      link: '/dashboard/verification-pay',
    },
  ];

  const isActive = (link: string) => {
    return router.pathname === link;
  };

  return (
    <div className='p-5 shadow-sm 2xl:w-[250px] w-[240px] h-[90vh] flex flex-col justify-between sticky top-[72px]'>
      <div className=''>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Akun</p>
          <div className='space-y-4'>
            {titleSideAccount.map((item, index) => (
              <Link key={index} href={item.link} className='space-y-2'>
                <div
                  className={`text-[#989898] group hover:bg-[#2D4074] hover:rounded-[4px] hover:text-white px-3 py-2 flex items-center gap-2 cursor-pointer ${
                    isActive(item.link)
                      ? 'bg-[#2D4074] rounded-[4px] text-white font-bold'
                      : ''
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={32}
                    height={32}
                    className={`invert-[62%] group-hover:filter group-hover:brightness-[0] group-hover:invert-[100%] ${
                      isActive(item.link)
                        ? 'filter brightness-[0] invert-[100%]'
                        : ''
                    }`}
                  />
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Event</p>
          <div className=' space-y-1'>
            {titleSideEvent.map((item, index) => (
              <Link key={index} href={item.link} className='space-y-2'>
                <div
                  className={`text-[#989898] group hover:bg-[#2D4074] hover:rounded-[4px] hover:text-white px-3 py-2 flex items-center gap-2 cursor-pointer ${
                    isActive(item.link)
                      ? 'bg-[#2D4074] rounded-[4px] text-white font-bold'
                      : ''
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={32}
                    height={32}
                    className={`invert-[62%] group-hover:filter group-hover:brightness-[0] group-hover:invert-[100%] ${
                      isActive(item.link)
                        ? 'filter brightness-[0] invert-[100%]'
                        : ''
                    }`}
                  />
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='text-sm space-y-3 mb-3'>
          <p className='font-bold'>Tiket</p>
          <div className=' space-y-1'>
            {titleSideTicket.map((item, index) => (
              <Link key={index} href={item.link} className='space-y-2'>
                <div
                  className={`text-[#989898] group hover:bg-[#2D4074] hover:rounded-[4px] hover:text-white px-3 py-2 flex items-center gap-2 cursor-pointer ${
                    isActive(item.link)
                      ? 'bg-[#2D4074] rounded-[4px] text-white font-bold'
                      : ''
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={32}
                    height={32}
                    className={`invert-[62%] group-hover:filter group-hover:brightness-[0] group-hover:invert-[100%] ${
                      isActive(item.link)
                        ? 'filter brightness-[0] invert-[100%]'
                        : ''
                    }`}
                  />
                  {item.title}
                </div>
              </Link>
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
