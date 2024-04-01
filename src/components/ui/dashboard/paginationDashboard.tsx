import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PaginationDashboard = (props: any) => {
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex items-center gap-2'>
        <p className='text-xs text-[#989898]'>Rows per page:</p>
        <select
          value={props.itemsPerPage.toString()}
          onChange={props.handleChangeItemsPerPage}
          className='px-3  bg-white border rounded'
        >
          <option value='10'>10</option>
          <option value='16'>16</option>
          <option value='24'>24</option>
          {/* tambahkan opsi lain sesuai kebutuhan Anda */}
        </select>
      </div>
      <div className='flex items-center gap-1'>
        <button
          onClick={props.goToPrevPage}
          disabled={props.currentPage === 1}
          className='group p-1 text-white hover:rounded hover:bg-navy-blue'
        >
          <FaAngleLeft className='text-[#989898] size-6 group-hover:text-white' />
        </button>
        {Array.from({ length: props.pageCount }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => props.setCurrentPage(page)}
              className={`px-3 py-1 border-[1px] hover:text-navy-blue ${
                props.currentPage === page
                  ? 'border-navy-blue text-navy-blue'
                  : 'border-[1px] text-gray-800'
              } rounded`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={props.goToNextPage}
          disabled={props.currentPage === props.pageCount}
          className='group p-1 text-white hover:rounded hover:bg-navy-blue'
        >
          <FaAngleRight className='text-[#989898] size-6 group-hover:text-white' />
        </button>
      </div>
    </div>
  );
};

export default PaginationDashboard;
