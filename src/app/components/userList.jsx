import React from "react";
import UserPage from "./userPage";
import Products from "./products";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const UserList = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage id={userId} /> : <Products />}</>;
};

UserList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default UserList;
