import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { deleteCart, buyProduct } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import OrderNavBars from "../NavBars/OrderNavBars";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

import "../App.css";
// import { logDOM } from "@testing-library/react";

// const cartData = JSON.parse(localStorage.getItem("persist:cart"));
// // console.log("persist:cart", JSON.parse(cartData.cartReducers));
// const cartDataList = cartData?.cartReducers
//   ? JSON.parse(cartData?.cartReducers).list
//   : [];
// console.log("cartDataList", cartDataList.length);

function Row({ elem, i }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  const [price, setprice] = useState();
  let handleClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleClick1 = () => {
    setQuantity(quantity + 1);
  };
  //   const deleteCrt = (i) => {
  //     cartDataList.slice(i, 1);
  //     // localStorage.setItem("persist:cart", JSON.stringify(cartDataList));
  //   };
  const handleChange = (e) => {
    setSize(e.target.value);
    setprice(elem.data.size[e.target.value]);
  };

  useEffect(() => {
    setSize(Object.keys(elem.data.size)[0]);
    setprice(Object.values(elem.data.size)[0]);
    console.log("Do something after counter has changed", size);
  }, [elem]);

  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <img src={elem.data.picture} className="productimgs" alt="images" />
      </td>
      <td>{elem.data.name}</td>
      <td>{price}</td>
      <td>
        <select defaultValue={size} onChange={handleChange} value={size}>
          {Object.keys(elem.data.size).map((sz) => (
            <option value={sz} selected>
              {sz}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button onClick={() => handleClick()}>-</button>
        <input type="number" value={quantity} />
        <button onClick={() => handleClick1()}>+</button>
      </td>
      <td>{quantity * price}</td>
      <button
        onClick={() => {
          dispatch(
            buyProduct(
              elem.id,

              {
                id: elem.id,
                picture: elem.data.picture,
                name: elem.data.name,
                price: price,
                size: size,
                quantity: quantity,
                totalAmount: quantity * price,
              }
              // localStorage.getItem("email")
            ),
            swal(
              elem.data.name,
              "Your Order Will Be Delivered Soon!",
              "success"
            )
          );
        }}
      >
        BookNow
      </button>
      <button onClick={() => dispatch(deleteCart(elem.id))}>delete</button>
    </tr>
  );
}
const Cart = () => {
  const list = useSelector((state) => state.cartReducers.list);
  //   console.log("cart", list);

  return (
    <div>
      <li className="nav-item">
        <NavLink
          activeClassName="menu-active"
          className="disabled"
          exact
          // className="nav-link"
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <OrderNavBars />
      <table id="shopping">
        <tr>
          <th>ProductPicture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>TotalAmount</th>
          <th>Buy</th>
        </tr>
        {list?.map((elem, i) => {
          console.log("id", elem.id);
          return <Row elem={elem} />;
        })}
      </table>
    </div>
  );
};
export default Cart;
