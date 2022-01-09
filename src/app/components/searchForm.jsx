import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onGetValue }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const { target } = event;
        const inputName = target.searchForm;
        const inputValue = inputName.value;
        onGetValue(inputValue);
      }}
      className="container d-flex mb-3"
    >
      <input
        className="form-control me-2"
        type="search"
        name="searchForm"
        placeholder="Введите название товара"
        aria-label="Search"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Найти
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onGetValue: PropTypes.func,
};

export default SearchForm;
