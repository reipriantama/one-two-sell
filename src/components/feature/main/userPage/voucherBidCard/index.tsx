import Image from 'next/image';
import React from 'react';
import Button from '../../../../ui/main/button';

const VoucherBidCard = () => {
  const bidCard = [
    {
      id: 1,
      count: 1,
      price: 250000,
    },
    {
      id: 2,
      count: 2,
      price: 250000,
    },
    {
      id: 3,
      count: 3,
      price: 250000,
    },
  ];

  return (
    <div className='space-y-12'>
      <h1 className='text-2xl font-semibold'>Beli Voucher Bid</h1>
      <div className='grid grid-cols-3 gap-6'>
        {bidCard.map((item, index) => (
          <div
            key={index}
            className='rounded-xl border-2 p-6 shadow-lg space-y-6'
          >
            <Image
              src='/assets/voucherBid/imageConcert.png'
              alt='logo'
              width={270}
              height={160}
              className='w-[270] h-[160px] object-cover'
            />
            <div className='space-y-1 text-base'>
              <p className='font-medium'>{item.id} Voucher Bid</p>
              <p className='font-bold text-[#2D4074]'>Rp {item.price},-</p>
            </div>
            <div className='space-y-3'>
              <Button
                buttonText='Beli Sekarang'
                className='w-full flex justify-center'
                primary
                link={`/user/voucher-bid/${item.id}`}
              />
              <p className='text-[10px] flex justify-center font-medium text-[#A6A6A6]'>
                Harga belum termasuk pajak dan admin fee
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherBidCard;
