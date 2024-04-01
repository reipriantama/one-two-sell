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

const VerificationPayPage = () => {
  const data = tableData;
  const [showDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxSelected(e.target.checked);
  };

  const columnHelper = createColumnHelper<any>();

  const useMemoColumn = useMemo<ColumnDef<any>[]>(() => {
    return [
      columnHelper.accessor('pilih', {
        header: 'Pilih',
        cell: () => {
          return (
            <div>
              <label>
                <input
                  type='checkbox'
                  name='todo[1]'
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          );
        },
      }),

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

      columnHelper.accessor('idInvoice', {
        header: 'Id Invoice',
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor('eventName', {
        header: 'Nama Event',
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => {
          return (
            <p className='truncate max-w-[122px]'>{info.row.original.email}</p>
          );
        },
      }),

      columnHelper.accessor('idIdentity', {
        header: 'Nomor KTP Pembeli',
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
              <Link
                href={`/dashboard/verification-pay/${info.row.original.idInvoice}`}
              >
                <IoMdInformationCircleOutline className='size-4 text-[#129555]' />
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
        <TitleDashboard title='Verifikasi Pembelian'>
          {isCheckboxSelected && (
            <ButtonTitle
              buttonText='Verfikasi Pembelian'
              link='/dashboard/segmentation/add-segmentation'
              verification
            />
          )}
        </TitleDashboard>
        <DataTable column={useMemoColumn} dataTable={data} />
      </LayoutDashboard>
      {showDeleteModal && (
        <DeleteModal onClick={closeModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default VerificationPayPage;
