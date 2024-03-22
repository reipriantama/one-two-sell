import React, { useState } from 'react';
import Button from '../../ui/button';
import EventInformation from '../eventInformation';
import PersonalInformation from '../personalInformation';
import PaymentMethod from '../paymentMethod';
import OrderReview from '../orderReview';

const BannerTitle = () => {
  const tab = [
    {
      title: 'Informasi Event & Tiket',
      value: 'event',
    },
    {
      title: 'Informasi Pribadi',
      value: 'personal',
    },
    {
      title: 'Metode Pembayaran',
      value: 'payment',
    },
    {
      title: 'Order Review',
      value: 'order',
    },
  ];

  const [activeTab, setActiveTab] = useState('event');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  // gunakan query params pada url

  return (
    <div className='space-y-12'>
      <div className='bg-[#E0E0E0] w-full h-[160px] rounded-xl'>image</div>
      <div className='flex justify-between'>
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
      {activeTab === 'event' && <EventInformation />}
      {activeTab === 'personal' && <PersonalInformation />}
      {activeTab === 'payment' && <PaymentMethod />}
      {activeTab === 'order' && <OrderReview />}
    </div>
  );
};

export default BannerTitle;
