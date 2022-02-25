import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// const cartData = JSON.parse(localStorage.getItem("persist:cart"));
// // console.log("persist:cart", JSON.parse(cartData.cartReducers));
// const cartDataList = cartData?.cartReducers
//   ? JSON.parse(cartData?.cartReducers).list
//   : [];

const OrderNavBars = () => {
  const list = useSelector((state) => state.cartReducers.list);
  console.log("list", list);

  return (
    <>
      <ul>
        <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to="/cart"
          >
            <span>
              <p>Cart</p>
              <h4>{list.length}</h4>
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to="/allorders"
          >
            All Orders
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            activeClassName="menu-active"
            className="disabled"
            exact
            // className="nav-link"
            to="/signin"
          >
            SignIn
          </NavLink>
        </li> */}
      </ul>
    </>
  );
};

export default OrderNavBars;
