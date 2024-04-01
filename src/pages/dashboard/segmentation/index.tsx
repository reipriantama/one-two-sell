import TitleDashboard from '@/components/feature/dashboard/titleDashboard';
import LayoutDashboard from '@/components/layouts/dashboard';
import ButtonTitle from '@/components/ui/dashboard/button';
import DataTable from '@/components/ui/dashboard/dataTable';
import { tableData } from '@/data/tableData';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const SegmentationPage = () => {
  const data = tableData;
  const [showDeleteModal, setIsShowDeleteModal] = useState(false);

  const closeModal = () => {
    setIsShowDeleteModal(false);
  };

  const columnHelper = createColumnHelper<any>();

  const useMemoColumn = useMemo<ColumnDef<any>[]>(() => {
    return [
      columnHelper.accessor('typeEvent', {
        header: 'Segmentasi',
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
          const value = info.getValue();
          return value ? (
            <div className=' text-xs text-[#222222]'>Aktif</div>
          ) : (
            <div className=' text-xs text-[#989898]'>Tidak Aktif</div>
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
              <Link
                href={`/dashboard/segmentation/${info.row.original.typeEvent}`}
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
        <TitleDashboard title='Segmentasi'>
          <ButtonTitle
            buttonText='Tambah Segmentasi'
            link='/dashboard/segmentation/add-segmentation'
          />
        </TitleDashboard>
        <DataTable column={useMemoColumn} dataTable={data} />
      </LayoutDashboard>
    </>
  );
};

export default SegmentationPage;
