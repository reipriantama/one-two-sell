import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import ButtonTitle from '@/components/ui/dashboard/button';
import React from 'react';

import { tableData, Person } from '@/data/tableData';
import DataTable from '@/components/ui/dashboard/dataTable';

const AccountListPage = () => {
  const data = tableData;

  function convertToSlug(data: string) {
    return data
      .toLowerCase()
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  return (
    <div>
      <LayoutDashboard
        title='Account List'
        className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'
      >
        <TitleDashboard title='List Akun' buttonText='Add Account'>
          <ButtonTitle buttonText='Add Account' />
        </TitleDashboard>
        <DataTable dataTable={data} />
        <div>this is AccounListPage</div>
      </LayoutDashboard>
    </div>
  );
};

export default AccountListPage;
