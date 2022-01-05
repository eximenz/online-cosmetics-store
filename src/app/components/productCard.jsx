import React from "react";
import PropTypes from "prop-types";
import CardBody from "./cardBody";
import CardButton from "./cardButton";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="row d-flex">
          <CardBody {...item} />
          <CardButton {...item} />
        </div>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductCard;
