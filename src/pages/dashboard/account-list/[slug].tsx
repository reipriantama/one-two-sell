import GeneralInformation from '@/components/feature/dashboard/accountList/generalInformation';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailAccount = () => {
  //   const { query } = useRouter();

  return (
    <div>
      <LayoutDashboard
        title='Detail Akun'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard />
        <div className='p-6 border-[1px] rounded-[4px] bg-white'>
          <GeneralInformation />
        </div>
      </LayoutDashboard>
    </div>
  );
};

export default DetailAccount;
