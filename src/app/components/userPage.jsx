import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";

const ProductPage = ({ id }) => {
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();

  const handleAllUsers = () => {
    history.replace("/products");
  };

  useEffect(() => {
    api.products.getBy(id).then((data) => setUserInfo(data));
  }, []);

  if (userInfo) {
    return (
      <>
        <h1>{userInfo.name}</h1>
        {/* <div>Професcия: {userInfo.profession.name}</div>
        <div>Завершенных встреч: {userInfo.completedMeetings}</div>
        <div>Рейтинг: {userInfo.rate}</div> */}
        <button
          onClick={() => {
            handleAllUsers();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }

  return "loading...";
};

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductPage;
