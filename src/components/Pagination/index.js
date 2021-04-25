import React from "react";
import { itemsPerPage } from "../../data";
import start from '../../utils/icons/first.svg';
import previous from '../../utils/icons/previous.svg';
import nextp from '../../utils/icons/next.svg';
import end from '../../utils/icons/last.svg';
import '../../styles/pagination.css';

const Pagination = ({currentPage, jump, prev, next, maxPage}) => {
  return (
    <div className="pagination col-md-3">
      <button className="pg-btn p" onClick={() => jump(1)}>
        <span><img className="pg-icon" src={start} alt='Start'/></span>
      </button>

      <button className="pg-btn p" onClick={() => prev()}>
        <span><img className="pg-icon2" src={previous} alt='Previous'/></span>
      </button>

      <p className="pagination-text">{(currentPage) * itemsPerPage} of {maxPage*itemsPerPage} products</p>      

      <button className="pg-btn p" onClick={() => next()}>
        <span><img className="pg-icon2" src={nextp} alt='next'/></span>
      </button>

      <button className="pg-btn p" onClick={() => jump(maxPage)}>
        <span><img className="pg-icon" src={end} alt='end'/></span>
      </button>
    </div>
  );
};

export default Pagination;