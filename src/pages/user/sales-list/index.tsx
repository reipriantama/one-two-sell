import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';
import UserCard from '@/components/feature/main/userPage/userTransaction/userCard';
import ModalDetailTransaction from '@/components/feature/main/userPage/userTransaction/userCard/modalDetailTransaction';
import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import Layout from '@/components/layouts/main';
import Button from '@/components/ui/main/button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SalesList = () => {
  const tab = [
    {
      title: 'Listed Event',
      value: 'event',
      path: '/user/sales-list/?list-event=true',
    },
    {
      title: 'On Progress',
      value: 'progress',
      path: '/user/sales-list/?on-progress=true',
    },
  ];

  const [activeTab, setActiveTab] = useState('event');
  const router = useRouter();

  const handleClick = (value: string, path: string) => {
    setActiveTab(value);
    router.push(path);
  };

  useEffect(() => {
    const { query } = router;
    if (query['on-progress']) {
      setActiveTab('progress');
    } else if (query['list-event']) {
      setActiveTab('event');
    }
  }, [router.query]);

  return (
    <div>
      <Layout
        className='py-12 sm:px-14 xl:px-[276px] space-y-6'
        title='User-Transaction'
      >
        <BreadcrumbUser breadcrumbText1='List Penjualan' />
        <UserTitle text='List Penjualan'>
          <Button
            buttonText='Jual Tiket'
            className='w-full px-9'
            primary
            link='/user/ticket-sell'
          />
        </UserTitle>
        <div className='flex gap-6 justify-center border-b-[1px]'>
          {tab.map((item, index) => (
            <Button
              key={index}
              buttonText={item.title}
              className={`w-full px-10 text-[#848484] rounded-none pb-2 
              ${
                activeTab === item.value
                  ? 'text-black border-b-[1px] border-black'
                  : 'hover:text-black'
              }
                  hover:text-black hover:border-b-[1px] hover:border-black`}
              onClick={() => handleClick(item.value, item.path)}
            />
          ))}
        </div>
        {activeTab === 'progress' && (
          <UserCard detailCardText='Lihat Halaman' />
        )}
        {activeTab === 'event' && (
          <UserCard detailCardText='Lihat Halaman' progress />
        )}
      </Layout>
    </div>
  );
};

export default SalesList;
