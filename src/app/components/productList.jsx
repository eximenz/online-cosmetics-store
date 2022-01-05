import React from "react";
import Products from "./products";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ProductPage from "./productPage";

const ProductList = () => {
  const params = useParams();
  const { productId } = params;

  return <>{productId ? <ProductPage id={productId} /> : <Products />}</>;
};

ProductList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductList;
