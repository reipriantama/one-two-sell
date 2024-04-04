import BannerTitle from '@/components/feature/main/transaction/bannerTitle';
import Layout from '@/components/layouts/main';
import { useRouter } from 'next/router';
import React from 'react';

const Transaction = () => {
  const { query } = useRouter();
  return (
    <>
      <Layout hidden className='px-[276px] py-6 space-y-12' title='Transaction'>
        <BannerTitle />
        {/* <EventInformation />
        <PersonalInformation />
        <PaymentMethod />
        <OrderReview /> */}
      </Layout>
    </>
  );
};

export default Transaction;
