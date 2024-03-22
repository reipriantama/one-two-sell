import Button from '@/components/feature/ui/button';
import React, { useState } from 'react';
import ListEvent from '../listEvent';
import EventInformationTicket from '../eventInformationTicket';
import SaleInformation from '../saleInformation';
import { useRouter } from 'next/router';

const TitleTicketSell = () => {
  const tab = [
    {
      title: 'List Event',
      value: 'listEvent',
    },
    {
      title: 'Informasi Event',
      value: 'eventInformation',
    },
    {
      title: 'Informasi Penjualan',
      value: 'saleInformation',
    },
  ];

  const { push, query } = useRouter();

  const [activeTab, setActiveTab] = useState('listEvent');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  // gunakan query params pada url

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Jual Tiket</h1>
      <div className='flex justify-around'>
        {tab.map((item, index) => (
          <Button
            key={index}
            buttonText={item.title}
            className={`flex justify-center pb-2 border-b-[1px]  hover:border-black ${
              activeTab === item.value ? 'text-black' : 'hover:text-black  '
            } rounded-none text-[#848484] flex-1`}
            onClick={() => handleClick(item.value)}
          />
        ))}
      </div>

      {activeTab === 'listEvent' && <ListEvent />}
      {activeTab === 'eventInformation' && <EventInformationTicket />}
      {activeTab === 'saleInformation' && <SaleInformation />}
    </div>
  );
};

export default TitleTicketSell;
