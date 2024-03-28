import InformationBanner from '@/components/feature/dashboard/banner/informationBanner';
import LayoutDashboard from '@/components/layouts/dashboard';
import BreadCrumbDashboard from '@/components/ui/dashboard/breadCrumb';
import React from 'react';

const DetailBannerPage = () => {
  return (
    <>
      <LayoutDashboard
        title='Detail Banner'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <BreadCrumbDashboard
          breadCrumbTextLink='Banner'
          breadCrumbLink='/dashboard/event-banner'
        />
        <div className='p-6 space-y-6 border-[1px] rounded-[4px] bg-white'>
          <InformationBanner />
        </div>
      </LayoutDashboard>
    </>
  );
};

export default DetailBannerPage;
