import React, { useEffect, useState, Fragment } from "react";
import { fetchData, paths, filters, sortOptions, itemsPerPage } from "../../data";
import SortBar from "../SortBar/index";
import FilterBar from "../FilterBar/index";
import usePagination from "../../utils/scripts/usePagination";
import Pagination from "../Pagination/index";
import '../../styles/products.css';

const Products = ({ info: { id }, render }) => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState(filters.price.id);
  const [categoryFilter, setCategoryFilter] = useState(filters.category.id);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    (async () => {
      setProducts(await fetchData({ data: paths[id] }));
    })();
  }, [id]);

  const productsToDisplay = products.filter(
    (element) =>
      (categoryFilter === filters.category.id ||
        element.category === categoryFilter) &&
      (priceFilter === filters.price.id ||
        (element.cost > parseInt(priceFilter.split("-")[0]) &&
         element.cost <= parseInt(priceFilter.split("-")[1])))
    )
    .sort((a, b) =>
      sortBy === sortOptions.lowPrice ? a.cost - b.cost : b.cost - a.cost
    );

  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    productsToDisplay,
    itemsPerPage
  );

  return (
    <div className="col-md-12 np">
      <div className="col-md-12 np f">
        <SortBar setSortBy={setSortBy} jump={jump} />
        <FilterBar
          products={products}
          setCategoryFilter={setCategoryFilter}
          setPriceFilter={setPriceFilter}
          jump={jump}
        />
        <Pagination
          currentPage={currentPage}
          jump={jump}
          prev={prev}
          next={next}
          maxPage={maxPage}
        />
      </div>

      <div className="col-md-12 grid">
        {currentData().map((element) => (
          <Fragment key={Math.random()}>{render({ ...element })}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;