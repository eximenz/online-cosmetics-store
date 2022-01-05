import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";

const ProductPage = ({ id }) => {
  const [productInfo, setProductInfo] = useState();
  // const history = useHistory();

  // const handleAllUsers = () => {
  //   history.replace("/products");
  // };

  useEffect(() => {
    api.products.getBy(id).then((data) => setProductInfo(data));
  }, []);

  if (productInfo) {
    return (
      <div className="container">
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
        {/* <button
          type="button"
          className="btn btn-secondary mt-3 mb-3"
          onClick={() => {
            handleAllUsers();
          }}
        >
          Все пользователи
        </button> */}
      </div>
    );
  }

  return "loading...";
};

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductPage;
