import React from 'react';

function Pagination({ currentPage, totalPages, handleNextPage, handlePrevPage }) {
  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
    </div>
  );
}

export default Pagination;
