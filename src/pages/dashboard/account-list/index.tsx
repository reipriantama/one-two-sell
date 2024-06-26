import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import ButtonTitle from '@/components/ui/dashboard/button';
import React, { useEffect, useMemo, useState } from 'react';

import { tableData, Person } from '@/data/tableData';
import DataTable from '@/components/ui/dashboard/dataTable';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import DeleteModal from '@/components/ui/dashboard/deleteModal';

const AccountListPage = () => {
  // const data = tableData;
  const [data, setData] = useState([]);
  const [showDeleteModal, setIsShowDeleteModal] = useState(false);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/dataTable');
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

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

      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
          const value = info.getValue();
          return value ? (
            <div className='bg-[#4A62A2] flex justify-center text-white w-[149px] px-3 py-2 text-xs rounded-2xl font-bold'>
              Verified Account
            </div>
          ) : (
            '-'
          );
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
              <Link href={`/dashboard/account-list/${slugName}/`}>
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
    <div>
      <LayoutDashboard className='bg-[#F8F8F8] flex-1 px-5 py-2 space-y-5'>
        <TitleDashboard title='List Akun'>
          {/* <ButtonTitle buttonText='Add Account' /> */}
        </TitleDashboard>
        <DataTable dataTable={data} column={useMemoColumn} />
      </LayoutDashboard>
      {showDeleteModal && (
        <DeleteModal onClick={closeModal} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AccountListPage;
