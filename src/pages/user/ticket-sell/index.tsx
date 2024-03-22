import TitleTicketSell from '@/components/feature/userPage/ticketSell/title';
import BreadcrumbUser from '@/components/feature/userPage/userTransaction/breadcrumb';
import Layout from '@/components/layouts';
import React from 'react';

const ticketSell = () => {
  return (
    <div>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Ticket-Sell'>
        <BreadcrumbUser
          breadcrumbText1='List Penjualan'
          classNameText1='text-[#4A62A2]'
          breadcrumbText2='Ticket Sell'
        />
        <TitleTicketSell />
      </Layout>
    </div>
  );
};

export default ticketSell;
