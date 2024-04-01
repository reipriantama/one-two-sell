import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import ButtonTitle from '@/components/ui/dashboard/button';
import DataTable from '@/components/ui/dashboard/dataTable';
import DeleteModal from '@/components/ui/dashboard/deleteModal';
import { tableData } from '@/data/tableData';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const VerificationSellPage = () => {
  const data = tableData;
  const [showDeleteModal, setIsShowDeleteModal] = useState(false);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

  const columnHelper = createColumnHelper<any>();

  const useMemoColumn = useMemo<ColumnDef<any>[]>(() => {
    return [
      columnHelper.accessor('fullName', {
        header: 'Nama Penjual',
        cell: (info) => {
          return (
            <div className='flex gap-2 items-center'>
              <div
                className={`bg-[#40916C] text-white rounded-full 
      size-8 flex justify-center items-center`}
              >
                {`${info.row.original.fullName.charAt(0)}${
                  info.row.original.fullName.split(' ')[1]
                    ? info.row.original.fullName.split(' ')[1].charAt(0)
                    : ''
                }`}
              </div>
              <p>{info.row.original.fullName}</p>
            </div>
          );
        },
      }),

      columnHelper.accessor('firstName', {
        header: 'Nama Pembeli',
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

      columnHelper.accessor('idInvoice', {
        header: 'Id Invoice',
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor('eventName', {
        header: 'Nama Event',
        cell: (info) => {
          return (
            <p className='truncate max-w-[122px]'>
              {info.row.original.eventName}
            </p>
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

      columnHelper.accessor('salePrice', {
        header: 'Harga Terjual',
        cell: (info) => {
          const value = info.getValue() as number;
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value);
        },
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
              <Link
                href={`/dashboard/verification-sell/${info.row.original.idInvoice}/`}
              >
                <div className='text-[#129555]'>
                  <IoMdInformationCircleOutline className='size-4' />
                </div>
              </Link>
              <div>
                <FaTrash
                  className='size-4 text-[#D10D0D] cursor-pointer'
                  onClick={() => setIsShowDeleteModal(true)}
                />
              </div>
            </div>
          );
        },
      }),
    ];
  }, []);

  return (
    <>
      <LayoutDashboard className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'>
        <TitleDashboard title='Verifikasi Penjualan' />
        <DataTable dataTable={data} column={useMemoColumn} />
      </LayoutDashboard>
      {showDeleteModal && (
        <DeleteModal onClick={closeModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default VerificationSellPage;
