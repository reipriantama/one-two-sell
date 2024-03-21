import React from 'react';
import Button from '../../ui/button';

const UserBid = () => {
  return (
    <div className='p-6 border-2 rounded-2xl shadow-sm space-y-4 flex-1'>
      <div className='flex justify-between font-semibold'>
        <p>Voucher Bid</p>
        <div>3</div>
      </div>
      <Button
        buttonText='Beli Voucher Bid'
        className='w-full py-3 px-2 font-semibold flex justify-center'
        primary
      />
    </div>
  );
};

export default UserBid;
