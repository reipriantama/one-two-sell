import BannerTitle from '@/components/feature/transaction/bannerTitle';
import EventInformation from '@/components/feature/transaction/eventInformation';
import Layout from '@/components/layouts';
import { useRouter } from 'next/router';
import React from 'react';

const Transaction = () => {
  const { query } = useRouter();
  return (
    <>
      <Layout hidden className='px-[276px] py-6' title='Transaction'>
        <BannerTitle />
        <EventInformation />
      </Layout>
    </>
  );
};

export default Transaction;
