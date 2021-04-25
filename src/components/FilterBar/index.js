import React from 'react';
import ListFilter from '../ListFilter/index';
import { filters } from '../../data';
import '../../styles/filters.css';


const FilterBar = ({ products, setCategoryFilter, setPriceFilter, jump }) => {
  let categories = [...products].map(e => e.category);
  const category = {...filters.category, options: categories.filter((element,pos) => categories.indexOf(element) === pos)};

  return (
    <div className='col-md-5 f filter-bar'>
      <p className="margin-p">Filter by: </p>
      <ListFilter {...category} handleFilterChange={setCategoryFilter} jump={jump}/>
      <ListFilter {...filters.price} handleFilterChange={setPriceFilter} jump={jump} />
    </div>
  );
}

export default FilterBar;