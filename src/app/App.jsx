import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import UserList from "./components/userList";
import Regisrtation from "./components/registration";

const App = () => {
  return (
    <>
      <div className="container-fluid bg-light mb-4 p-0">
        <div className="row">
          <div className="col-sm">
            <NavBar />
          </div>
          <div className="col-sm d-flex justify-content-end align-items-center">
            <Regisrtation />
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={UserList} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
