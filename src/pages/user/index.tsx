import UserBid from '@/components/feature/main/userPage/userBid';
import UserMenu from '@/components/feature/main/userPage/userMenu';
import UserProfile from '@/components/feature/main/userPage/userProfile';
import Layout from '@/components/layouts/main';
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
