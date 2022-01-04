import React from "react";
import Products from "./products";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ProductPage from "./userPage";

const ProductList = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <ProductPage id={userId} /> : <Products />}</>;
};

ProductList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductList;
