import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import UserCard from '@/components/feature/main/userPage/userTransaction/userCard';
import Layout from '@/components/layouts/main';
import React, { useState } from 'react';
import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';
import ModalDetailTransaction from '@/components/feature/main/userPage/userTransaction/userCard/modalDetailTransaction';

const UserTransactionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Transaction'>
        <BreadcrumbUser breadcrumbText1='Riwayat Transaksi' />
        <UserTitle text='Riwayat Transaksi' />
        <UserCard
          detailCardText='Lihat Detail Transaksi'
          openModal={setIsOpen}
        />
        <div>ini halaman user transaction</div>
      </Layout>
      {isOpen && <ModalDetailTransaction closeModal={closeModal} />}
    </>
  );
};

export default UserTransactionPage;
