import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';
import UserCard from '../../main/userPage/userTransaction/userCard';

const LastSell = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Penjualan Terakhir' />
      <UserCard />
    </div>
  );
};

export default LastSell;
