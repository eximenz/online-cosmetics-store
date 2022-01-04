import React from "react";
import { Link } from "react-router-dom";

const Regisrtation = () => {
  return (
    <div className="p-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Вход</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Регистрация</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Regisrtation;
