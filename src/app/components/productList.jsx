import React from "react";
import Products from "./products";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ProductPage from "./productPage";

const ProductList = ({ valueForFiltrationBySearch }) => {
  const params = useParams();
  const { productId } = params;

  return (
    <>
      {productId ? (
        <ProductPage
          id={productId}
          valueForFiltrationBySearch={valueForFiltrationBySearch}
        />
      ) : (
        <Products valueForFiltrationBySearch={valueForFiltrationBySearch} />
      )}
    </>
  );
};

ProductList.propTypes = {
  valueForFiltrationBySearch: PropTypes.string,
};

export default ProductList;
