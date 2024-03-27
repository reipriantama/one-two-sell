import InputDashboard from '@/components/ui/dashboard/inputDashboard';
import TitleAccountList from '@/components/ui/main/titleAccountList';
import React from 'react';

const PaymentInformation = () => {
  return (
    <div className='space-y-6'>
      <TitleAccountList titleText='Informasi Pembayaran' />
      <div className='grid grid-cols-2 gap-4'>
        <InputDashboard labelText='Bank' placeholderText='BCA' />
        <InputDashboard
          labelText='Nomor Rekening Bank'
          placeholderText='Masukan Nomor Rekening Anda'
        />
      </div>
    </div>
  );
};

export default PaymentInformation;
