import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import _ from "lodash";
import SortByPrice from "./sortByPrice";
import ProductCard from "./productCard";

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
      <div className="container">
        <div className="row mb-3">
          {category && (
            <div className="col-3">
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
          <div className="col-9">
            <div className="row">
              <div className="col-10">
                <SearchStatus length={count} />
              </div>
              <div className="col-2 d-flex justify-content-end">
                <SortByPrice onSort={handleSort} />
              </div>
            </div>
            <ProductCard data={productCrop} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
  return "loading...";
};

export default Products;
