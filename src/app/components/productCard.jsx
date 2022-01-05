import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./card";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="row d-flex">
          <Card {...item} />
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <Link to={`/products/${item._id}`}>
              <button type="button" className="btn btn-outline-secondary">
                Открыть карточку товара
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductCard;
