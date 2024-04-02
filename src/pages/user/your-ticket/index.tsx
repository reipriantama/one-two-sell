import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';
import UserCard from '@/components/feature/main/userPage/userTransaction/userCard';
import ModalDetailTicket from '@/components/feature/main/userPage/userTransaction/userCard/modalDetailTicket';
import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import Layout from '@/components/layouts/main';
import React, { useState } from 'react';

const UserTicketPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Ticket'>
        <BreadcrumbUser breadcrumbText1='E-Tiket Kamu' />
        <UserTitle text='E-Tiket Kamu' />
        <UserCard detailCardText='Lihat Detail Tiket' openModal={setIsOpen} />
        <div>Pagination</div>
      </Layout>
      {isOpen && <ModalDetailTicket closeModal={closeModal} />}
    </>
  );
};

export default UserTicketPage;
