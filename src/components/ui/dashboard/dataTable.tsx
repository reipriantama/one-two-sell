import React, { useMemo, useState } from 'react';

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Link from 'next/link';
import PaginationDashboard from './paginationDashboard';

type DataTableProps = {
  dataTable: any[];
};

const DataTable: React.FC<DataTableProps> = ({ dataTable }) => {
  const [data, setData] = useState(() => [...dataTable]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
      columnHelper.accessor('date', {
        header: 'Tanggal Pengajuan',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('actions', {
        header: 'Detail',
        cell: (info) => {
          function convertToSlug(data: string) {
            return data
              .toLowerCase()
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '');
          }

          const slugName = convertToSlug(
            info.row.original.firstName + '-' + info.row.original.lastName
          );

          return <Link href={`/dashboard/account-list/${slugName}`}>icon</Link>;
        },
      }),
    ];
  }, []);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const table = useReactTable({
    data: paginatedData ?? [],
    columns: useMemoColumn,
    getCoreRowModel: getCoreRowModel(),
  });

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleChangeItemsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <table className='w-full'>
        <thead className=''>
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id} className=''>
              {headerGroup.headers.map((header, columnIndex) => (
                <th
                  className={`text-xs font-bold text-[#5D5D5D] text-start px-4 pt-6 pb-3`}
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`${rowIndex % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}`}
            >
              {row.getVisibleCells().map((cell, columnIndex) => (
                <td
                  key={cell.id}
                  className={`text-xs text-[#222222] text-start px-4 py-5`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationDashboard
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        handleChangeItemsPerPage={handleChangeItemsPerPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DataTable;
