import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate'
import Thread from '../../../components/Thread';

const HomeThreads = ({ threads, handlePageChange, pageCount, currentPage }) => (
  <Fragment>
    {
      threads.map(thread =>  <Thread key={thread.id} thread={thread} />)
    }
    <div className="row justify-content-center my-5">
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disable"
        breakClassName="page-link"
        onPageChange={handlePageChange}
        pageCount={pageCount}
        forcePage={currentPage}
      />
    </div>
  </Fragment>
);

export default HomeThreads;
