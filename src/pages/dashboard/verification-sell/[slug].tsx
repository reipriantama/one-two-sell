import ConfirmModal from '@/components/feature/dashboard/verificationSell/confirmModal';
import InformationSell from '@/components/feature/dashboard/verificationSell/informationSell';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import Button from '@/components/ui/main/button';
import React, { useState } from 'react';

const DetailVerificationSell = () => {
  const [showConfirmModal, setIsShowConfirmModal] = useState(false);

  const closeModal = () => {
    setIsShowConfirmModal(false);
  };
  return (
    <>
      <LayoutDashboard
        title='Detail Verifikasi Penjualan'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Verifikasi Penjualan'
          breadCrumbLink='/dashboard/verification-sell'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationSell />
        </div>
        <div className='flex-1'>
          <Button
            buttonText='Konfirmasi Penjualan'
            className='w-full justify-center'
            confirm
            onClick={() => setIsShowConfirmModal(true)}
          />
        </div>
      </LayoutDashboard>
      {showConfirmModal && <ConfirmModal closeModal={closeModal} />}
    </>
  );
};

export default DetailVerificationSell;
