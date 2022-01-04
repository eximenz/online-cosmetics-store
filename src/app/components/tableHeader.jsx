import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Сортировать по цене
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li
          className="dropdown-item"
          onClick={() => {
            onSort({ path: "price", order: "asc" });
          }}
        >
          По возрастанию
        </li>
        <li
          className="dropdown-item"
          onClick={() => {
            onSort({ path: "price", order: "desc" });
          }}
        >
          По убыванию
        </li>
      </ul>
    </div>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default TableHeader;
