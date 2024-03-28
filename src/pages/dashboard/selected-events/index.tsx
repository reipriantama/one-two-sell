import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import DataTable from '@/components/ui/dashboard/dataTable';
import DeleteModal from '@/components/ui/dashboard/deleteModal';
import { tableData } from '@/data/tableData';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const SelectedEvent = () => {
  const data = tableData;
  const [showDeleteModal, setIsShowDeleteModal] = useState(false);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

  const columnHelper = createColumnHelper<any>();

  const useMemoColumn = useMemo<ColumnDef<any>[]>(() => {
    return [
      columnHelper.accessor('eventName', {
        header: 'Nama Event',
        cell: (info) => {
          return <p className=''>{info.row.original.eventName}</p>;
        },
      }),
      columnHelper.accessor('dateEvent', {
        header: 'Tanggal Acara',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('typeEvent', {
        header: 'Tipe Acara',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('genre', {
        header: 'Segment',
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor('format', {
        header: 'Format',
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
                href={`/dashboard/selected-events/${info.row.original.eventName}`}
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
        <TitleDashboard title='Selected Event' />
        <DataTable column={useMemoColumn} dataTable={data} />
      </LayoutDashboard>
      {showDeleteModal && (
        <DeleteModal onClick={closeModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default SelectedEvent;
