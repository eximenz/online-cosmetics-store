import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import BreadCrumbs from "./breadСrumbs";
import ProductPartOnProductPage from "./ProductPartOnProductPage";
import { Redirect } from "react-router-dom";

const ProductPage = ({ id, valueForFiltrationBySearch }) => {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    let cleanupFunction = true;
    api.products.getBy(id).then((data) => {
      if (cleanupFunction) setProductInfo(data);
    });
    return () => (cleanupFunction = false);
  }, []);

  if (valueForFiltrationBySearch) {
    return (
      <>
        <Redirect to="/products" />
      </>
    );
  }

  if (productInfo) {
    return (
      <div className="container">
        <div>
          <BreadCrumbs
            className="row"
            {...productInfo}
            category={productInfo.category.name}
          />
        </div>
        <div className="row">
          <ProductPartOnProductPage {...productInfo} />
        </div>
      </div>
    );
  }

  return "loading...";
};

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
  valueForFiltrationBySearch: PropTypes.string,
};

export default ProductPage;
