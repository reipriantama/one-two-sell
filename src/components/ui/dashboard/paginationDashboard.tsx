import React from 'react';

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
      <div>
        <button
          onClick={props.goToPrevPage}
          disabled={props.currentPage === 1}
          className='px-3 py-1 mr-2 bg-blue-500 text-white rounded'
        >
          Previous
        </button>
        {Array.from({ length: props.pageCount }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => props.setCurrentPage(page)}
              className={`px-3 py-1 mr-2 ${
                props.currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              } rounded`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={props.goToNextPage}
          disabled={props.currentPage === props.pageCount}
          className='px-3 py-1 bg-blue-500 text-white rounded'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationDashboard;
