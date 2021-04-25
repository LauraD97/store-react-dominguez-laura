import React, { useState } from "react";
import { sortOptions } from "../../data";
import '../../styles/filters.css';

const SortBar = ({ setSortBy, jump }) => {
  const [active, setActive] = useState("");

  const handleSort = (id) => {
    setActive(id);
    setSortBy(id);
    jump(1);
  };

  return(
    <div className="col-md-4 sort-bar">
      <p className="margin-p">Sort by:</p>
      
      { Object.entries(sortOptions).map((element) => (
        <button
          key={element[1]}
          className={(active === element[1]) ? "button-active" : "button"}
          onClick={() => handleSort(element[1])}
        >
          {element[1]}
        </button>
      ))}
    </div>
  );
};

export default SortBar;