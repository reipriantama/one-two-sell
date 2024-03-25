import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import UserCard from '@/components/feature/main/userPage/userTransaction/userCard';
import Layout from '@/components/layouts/main';
import React from 'react';
import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';

const UserTransactionPage = () => {
  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Transaction'>
        <BreadcrumbUser breadcrumbText='Riwayat Transaksi' />
        <UserTitle text='Riwayat Transaksi' />
        <UserCard />
        <div>ini halaman user transaction</div>
      </Layout>
    </>
  );
};

export default UserTransactionPage;
