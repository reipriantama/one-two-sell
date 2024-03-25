import React, { useState } from 'react';
import Button from '../../../../ui/button';
import PaymentMethod from '../../transaction/paymentMethod';
import OrderReview from '../../transaction/orderReview';

const BannerTitleVoucherBid = () => {
  const tab = [
    {
      title: 'Metode Pembayaran',
      value: 'payment',
    },
    {
      title: 'Order Review',
      value: 'order',
    },
  ];

  const [activeTab, setActiveTab] = useState('payment');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='space-y-12'>
        <div className='bg-[#E0E0E0] w-full h-[160px] rounded-xl'>image</div>
        <div className='flex justify-center gap-6'>
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
        {activeTab === 'payment' && <PaymentMethod />}
        {activeTab === 'order' && <OrderReview />}
      </div>
    </div>
  );
};

export default BannerTitleVoucherBid;
