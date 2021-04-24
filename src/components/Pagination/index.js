import React from "react";
import { itemsPerPage } from "../../data";
import '../../styles/pagination.css';

const Pagination = ({currentPage, jump, prev, next, maxPage}) => {
  return (
    <div className="">
      <p>{(currentPage-1)*itemsPerPage} of {maxPage*itemsPerPage} products</p>
      <button onClick={() => jump(1)}>&lt;&lt;</button>
      <button onClick={() => prev()}>&lt;</button>
      <>{currentPage}</>
      <button onClick={() => next()}>&gt;</button>
      <button onClick={() => jump(maxPage)}>&gt;&gt;</button>
    </div>
  );
};

export default Pagination;