import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  // const renderPhrase = (number) => {
  //   const message =
  //     number >= 2 && number <= 4 ? "человека тусанут" : "человек тусанет";

  //   return `${number} ${message} с тобой сегодня`;
  // };

  return (
    <div className="h6 mb-4">
      Количество товаров, найденных по запросу: {length}
      {/* {length > 0 ? renderPhrase(length) : "Никто с тобой не тусанет"} */}
    </div>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
