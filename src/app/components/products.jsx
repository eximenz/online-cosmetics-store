import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";

const Products = () => {
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const pageSize = 8;
  const [products, setProducts] = useState();

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  // const handleDelete = (productId) => {
  //   setProducts((prevState) => prevState.filter((product) => product._id !== productId));
  // };

  useEffect(() => {
    api.category.fetchAll().then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleCategorySelect = (item) => {
    setSelectedCategory(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (products) {
    const filteredProducts = selectedCategory
      ? products.filter((prod) => prod.category._id === selectedCategory._id)
      : products;
    const count = filteredProducts.length;
    const sortedProducts = _.orderBy(
      filteredProducts,
      [sortBy.path],
      [sortBy.order]
    );
    const productCrop = paginate(sortedProducts, currentPage, pageSize);

    const clearFilter = () => {
      setSelectedCategory();
    };

    return (
      <div className="d-flex">
        {category && (
          <div className="col-sm-3 d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedCategory}
              items={category}
              onItemSelect={handleCategorySelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column pr-5">
          <SearchStatus length={count} />
          {count > 0 && (
            <UserTable
              products={productCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              // onDelete={handleDelete}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};

export default Products;
