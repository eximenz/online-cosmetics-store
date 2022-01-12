import React, { useState } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Favorites from "./components/favorites";
import Basket from "./components/basket";
import SingIn from "./components/singIn";
import Registration from "./components/registration";
import ProductList from "./components/productList";
import SearchForm from "./components/searchForm";

const App = () => {
  const [valueForFiltrationBySearch, setValueForFiltrationBySearch] =
    useState();

  const getValueFromSearch = (params) => {
    setValueForFiltrationBySearch(params);
  };

  return (
    <>
      <NavBar />
      <SearchForm onGetValue={getValueFromSearch} />
      <Switch>
        <Route path="/login" component={Favorites} />
        <Route path="/basket" component={Basket} />
        <Route
          path="/products/:productId?"
          render={() => (
            <ProductList
              valueForFiltrationBySearch={valueForFiltrationBySearch}
            />
          )}
        />
        <Route path="/singIn" component={SingIn} />
        <Route path="/registration" component={Registration} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
