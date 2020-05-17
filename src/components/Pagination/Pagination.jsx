import React from 'react';
import T from 'prop-types';

const Pagination = ({ currentPage, totalPages, paginating }) => (
  <div className="pagination">
    <button type="button" className="btn-prev" onClick={() => paginating(currentPage - 1)} disabled={currentPage === 1}>
      <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
      </svg>
    </button>
    <span className="current-page">{currentPage}</span>
    <button
      type="button"
      className="btn-next"
      onClick={() => paginating(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
      </svg>
    </button>
  </div>
);

Pagination.defaultProps = {
  totalPages: T.number,
};

Pagination.propTypes = {
  currentPage: T.number.isRequired,
  totalPages: T.number,
  paginating: T.func.isRequired,
};

export default Pagination;
