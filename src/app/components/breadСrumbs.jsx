import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BreadCrumbs = ({ name, category }) => {
  return (
    <div className="p-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/">
              Главная
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/products">
              Все товары
            </Link>
          </li>

          <li className="breadcrumb-item">
            {category} {name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

BreadCrumbs.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BreadCrumbs;
