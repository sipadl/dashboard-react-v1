import React, { useState } from 'react';

const Table = ({ th, data, itemsPerPage }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page numbers with ellipsis if there are many pages
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Adjust to control how many page numbers to show at once

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', maxPageNumbers);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, maxPageNumbers);
      } else {
        pageNumbers.push(1, '...', currentPage, '...', maxPageNumbers);
      }
    }
    return pageNumbers;
  };

  const handlePageClick = (page) => {
    if (page !== '...') {
      setCurrentPage(page);
    }
  };

  return (
    <div className='table-responsive'>
      <table className='table table-custom'>
        <thead>
          <tr>
            {th.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={th.length}>
              <div className="pagination-controls">
                {getPaginationNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(page)}
                    disabled={page === '...' || page === currentPage}
                    className={page === currentPage ? 'btn btn-light btn-sm active' : 'btn btn-light btn-sm'}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
