import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import BreadCrumbs from "./breadСrumbs";

const ProductPage = ({ id }) => {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    api.products.getBy(id).then((data) => setProductInfo(data));
  }, []);

  if (productInfo) {
    return (
      <>
        <div className="container">
          <div>
            <BreadCrumbs
              className="row"
              {...productInfo}
              category={productInfo.category.name}
            />
          </div>
          <div className="row">
            <div className="col-5">
              <img src={productInfo.src} alt={productInfo.alt} />
            </div>
            <div className="col">
              <h4 className="mt-5 mb-2">{productInfo.name}</h4>
              <div>{productInfo.description}</div>
              <h5 className="mt-5">Цена: {productInfo.price} р</h5>
            </div>
            <div className="col d-flex flex-column justify-content-around">
              <button type="button" className="btn btn-outline-secondary">
                В корзину
              </button>
              <div className="d-flex justify-content-end">
                Артикл: {productInfo._id}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return "loading...";
};

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductPage;
