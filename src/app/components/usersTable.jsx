import React from "react";
import PropTypes from "prop-types";
// import BookMark from "./bookmark";
// import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
  products,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const columns = {
    price: { path: "price", name: "Оценка" },
  };

  console.log(selectedSort);

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={products}
    />
  );
};

UserTable.propTypes = {
  products: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default UserTable;
