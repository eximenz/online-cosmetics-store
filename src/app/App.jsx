import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import UserList from "./components/userList";
import Favorites from "./components/favorites";
import Basket from "./components/basket";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Favorites} />
        <Route path="/basket" component={Basket} />
        <Route path="/products/:userId?" component={UserList} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
