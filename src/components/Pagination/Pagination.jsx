import React from "react";
import "./Pagination.scss"

const Pagination = (props) => {
  const { beersPerPage, totalBeers, handlePage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(totalBeers / beersPerPage)+1; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="pagination__item">
                    <a className="pagination__link" href="#!" onClick={() => handlePage(number)} > &nbsp;&nbsp;{number}&nbsp;&nbsp; </a>
                </li> ))}
      </ul>
    </nav>
  );
};

export default Pagination;
