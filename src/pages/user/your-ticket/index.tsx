import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';
import UserCard from '@/components/feature/main/userPage/userTransaction/userCard';
import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import Layout from '@/components/layouts/main';
import React from 'react';

const UserTicketPage = () => {
  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Ticket'>
        <BreadcrumbUser breadcrumbText='E-Tiket Kamu' />
        <UserTitle text='E-Tiket Kamu' />
        <UserCard />
        <div>Pagination</div>
      </Layout>
    </>
  );
};

export default UserTicketPage;
