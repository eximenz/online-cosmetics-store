import React from "react";
import NavBarItems from "./navBarItems";
import SignInRegisrtationBlock from "./SignInRegisrtationBlock";

const NavBar = () => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="col d-flex align-items-center">
          <NavBarItems />
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <SignInRegisrtationBlock />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
