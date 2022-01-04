import React from "react";
import { Link } from "react-router-dom";

const NavBarItems = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.clipartkey.com/mpngs/m/43-432819_hair-and-makeup-logo-wwwpixsharkcom-images-galleries-professional.png"
            alt="логотип"
            width="150"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active 4rem"
                aria-current="page"
                to="/products"
              >
                Товары
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Избранное
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/basket">
                Корзина
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarItems;
