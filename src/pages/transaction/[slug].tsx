import BannerTitle from '@/components/feature/transaction/bannerTitle';
import EventInformation from '@/components/feature/transaction/eventInformation';
import OrderReview from '@/components/feature/transaction/orderReview';
import PaymentMethod from '@/components/feature/transaction/paymentMethod';
import PersonalInformation from '@/components/feature/transaction/personalInformation';
import Layout from '@/components/layouts';
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
