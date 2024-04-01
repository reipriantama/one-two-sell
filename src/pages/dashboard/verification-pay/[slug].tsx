import InformationPay from '@/components/feature/dashboard/verificationPay/informationPay';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailVerificationSellPage = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Verifikasi Pembelian'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Verifikasi Pembelian'
          breadCrumbLink='/dashboard/verification-sell'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationPay />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailVerificationSellPage;
