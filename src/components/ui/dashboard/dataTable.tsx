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
  column: any[];
};

const DataTable: React.FC<DataTableProps> = ({ dataTable, column }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataTable.slice(startIndex, endIndex);
  }, [dataTable, currentPage, itemsPerPage]);

  const pageCount = Math.ceil(dataTable.length / itemsPerPage);

  const table = useReactTable({
    data: paginatedData ?? [],
    columns: column,
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
