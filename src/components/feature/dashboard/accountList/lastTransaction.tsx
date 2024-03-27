import React from 'react';
import UserCard from '../../main/userPage/userTransaction/userCard';
import TitleAccountList from '@/components/ui/main/titleAccountList';

const LastTransaction = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList />
      <UserCard />
    </div>
  );
};

export default LastTransaction;
