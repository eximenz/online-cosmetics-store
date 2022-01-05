import React from "react";

const SearchForm = () => {
  return (
    <form className="container d-flex mb-3">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Введите название товара"
        aria-label="Search"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
