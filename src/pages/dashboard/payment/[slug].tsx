import GeneralInformation from '@/components/feature/dashboard/accountList/generalInformation';
import LastSell from '@/components/feature/dashboard/accountList/lastSell';
import PaymentInformationTable from '@/components/feature/dashboard/payment/paymentInformationTable';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailPayment = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Akun'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbText='Pembayaran'
          breadCrumbLink='/dashboard/payment'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <GeneralInformation />
          {/* <PaymentInformation /> */}
          <LastSell />
          <PaymentInformationTable />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailPayment;
