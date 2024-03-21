import UserTransactionHistory from '@/components/feature/userPage/userTransaction/transactionHistory';
import UserTransactionCard from '@/components/feature/userPage/userTransaction/userTransactionCard';
import Layout from '@/components/layouts';
import React from 'react';

const UserTransactionPage = () => {
  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Transaction'>
        <div>Breadcrumb</div>
        <UserTransactionHistory />
        <UserTransactionCard />
        <div>ini halaman user transaction</div>
      </Layout>
    </>
  );
};

export default UserTransactionPage;
