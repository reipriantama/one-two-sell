import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import DataTable from '@/components/ui/dashboard/dataTable';
import React, { useMemo } from 'react';
import { tableData, Person } from '@/data/tableData';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

const PaymentListPage = () => {
  const data = tableData;

  const columnHelper = createColumnHelper<any>();

  const useMemoColumn = useMemo<ColumnDef<any>[]>(() => {
    return [
      columnHelper.accessor('firstName', {
        header: 'Nama Akun',
        cell: (info) => {
          return (
            <div className='flex gap-2 items-center'>
              <div
                className={`bg-[#40916C] text-white rounded-full 
                size-8 flex justify-center items-center`}
              >
                {`${info.row.original.firstName.charAt(
                  0
                )} ${info.row.original.lastName.charAt(0)}`}
              </div>
              <p>{`${info.row.original.firstName} ${info.row.original.lastName}`}</p>
            </div>
          );
        },
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => {
          return (
            <p className='truncate max-w-[122px]'>{info.row.original.email}</p>
          );
        },
      }),
      columnHelper.accessor('phone', {
        header: 'Nomor Handphone',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('payment', {
        header: 'Pembayaran',
        cell: (info) => {
          const value = info.getValue() as number;
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value);
        },
      }),
      columnHelper.accessor('paymentProcess', {
        header: 'Proses Pembayaran',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('datePayment', {
        header: 'Tanggal Pengajuan',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('actions', {
        header: 'Detail',
        cell: (info) => {
          function convertToSlug(dataTable: string) {
            return dataTable
              .toLowerCase()
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '');
          }

          const slugName = convertToSlug(
            info.row.original.firstName + '-' + info.row.original.lastName
          );

          return (
            <div className='flex gap-2'>
              <Link href={`/dashboard/payment/${slugName}`}>
                <IoMdInformationCircleOutline className='size-4 text-[#129555]' />
              </Link>
            </div>
          );
        },
      }),
    ];
  }, []);

  return (
    <>
      <LayoutDashboard className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'>
        <TitleDashboard title='Pembayaran'>
          {/* <ButtonTitle buttonText='Add Account' /> */}
        </TitleDashboard>
        <DataTable column={useMemoColumn} dataTable={data} />
      </LayoutDashboard>
    </>
  );
};

export default PaymentListPage;
