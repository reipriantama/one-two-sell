import UserBid from '@/components/feature/userPage/userBid';
import UserMenu from '@/components/feature/userPage/userMenu';
import UserProfile from '@/components/feature/userPage/userProfile';
import Layout from '@/components/layouts';
import React from 'react';

const UserPage = () => {
  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User'>
        <UserProfile />
        <div className='flex justify-center gap-6'>
          <UserMenu />
          <UserBid />
        </div>
      </Layout>
    </>
  );
};

export default UserPage;
