import React from "react";
import { NavLink } from "react-router-dom";

const UiNavBar = () => {
  return (
    <>
      <ul>
        {/* <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to=""
          >
            Amazona
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to=""
          >
            Your Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to="/signin"
          >
            SignIn
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default UiNavBar;
