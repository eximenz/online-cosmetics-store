import React from "react";
import Products from "./products";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ProductPage from "./productPage";

const ProductList = ({ valueForFiltration }) => {
  const params = useParams();
  const { productId } = params;

  return (
    <>
      {productId ? (
        <ProductPage id={productId} />
      ) : (
        <Products valueForFiltration={valueForFiltration} />
      )}
    </>
  );
};

ProductList.propTypes = {
  valueForFiltration: PropTypes.string,
};

export default ProductList;
