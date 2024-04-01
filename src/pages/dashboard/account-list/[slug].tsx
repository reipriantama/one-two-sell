import GeneralInformation from '@/components/feature/dashboard/accountList/generalInformation';
import LastSell from '@/components/feature/dashboard/accountList/lastSell';
import LastTransaction from '@/components/feature/dashboard/accountList/lastTransaction';
import PaymentInformation from '@/components/feature/dashboard/accountList/paymentInformation';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailAccount = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Akun'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
        breadCrumbLink='/dashboard/account-list'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Banner'
          breadCrumbLink='/dashboard/account-list'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <GeneralInformation />
          <PaymentInformation />
          <LastTransaction />
          <LastSell />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailAccount;
