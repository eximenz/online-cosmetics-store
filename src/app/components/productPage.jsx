import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import BreadCrumbs from "./breadСrumbs";
import ProductPartOnProductPage from "./ProductPartOnProductPage";

const ProductPage = ({ id }) => {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    api.products.getBy(id).then((data) => setProductInfo(data));
  }, []);

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
};

export default ProductPage;
