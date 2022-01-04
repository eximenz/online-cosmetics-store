import React from "react";
import NavBarItems from "./navBarItems";
import SignInRegisrtationBlock from "./SignInRegisrtationBlock";

const NavBar = () => {
  return (
    <div className="container-fluid bg-light mb-4 p-0">
      <div className="row">
        <div className="col-sm">
          <NavBarItems />
        </div>
        <div className="col-sm d-flex justify-content-end align-items-center">
          <SignInRegisrtationBlock />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
