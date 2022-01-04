import React from "react";
import { Link } from "react-router-dom";

const SignInRegisrtationBlock = () => {
  return (
    <div className="p-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/singIn">
              Вход
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/registration">
              Регистрация
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default SignInRegisrtationBlock;
