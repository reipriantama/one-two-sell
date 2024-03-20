import Layout from '@/components/layouts';
import { useRouter } from 'next/router';
import React from 'react';

const Transaction = () => {
  const { query } = useRouter();
  return (
    <>
      <Layout hidden className='px-[276px] py-6'>
        
      </Layout>
    </>
  );
};

export default Transaction;
