import React, { useState, useEffect } from "react";

import OrderNavBars from "../NavBars/OrderNavBars";
import { deleteProduct } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "../App.css";

// const cartData = JSON.parse(localStorage.getItem("persist:cart"));
// const cartDataList = cartData?.buyReducers
//   ? JSON.parse(cartData?.buyReducers).orderlist
//   : [];
// console.log("cartDataList", cartDataList);
function Row({ elem, i }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <img src={elem.buyData.picture} className="productimg" alt="images" />
      </td>
      <td>{elem.buyData.name}</td>
      <td>{elem.buyData.price}</td>
      <td>{Object.values(elem.buyData.size)}</td>
      <td>{elem.buyData.quantity}</td>
      <td>{elem.buyData.totalAmount}</td>
      <td>
        <button onClick={() => dispatch(deleteProduct(elem.buyData.id))}>
          cancel
        </button>
        <br />
      </td>
    </tr>
  );
}

const AllOrders = () => {
  const orderlist = useSelector((state) => state.buyReducers.orderlist);
  //   console.log("orderlist", orderlist[0].buyData.totalAmount);
  const promocode = { FREE50: 50, FREE100: 100, FREE200: 200, FREE250: 250 };
  const [inputData, setInputData] = useState("");
  const [amount, setAmount] = useState("");
  const handleClick = () => {
    // console.log("type", typeof inputData);
    // console.log("typeobj", typeof Object.keys(promocode)[0]);
    // console.log("typeobjsssss", Object.values(promocode));

    Object.keys(promocode).forEach((promo) => {
      return inputData === promo
        ? setAmount(amount - promocode[inputData])
        : amount;
    });
    document.getElementById("myBtn").disabled = true;

    // inputData === Object.keys(promocode) ? (
    //   <h1>
    //     Total Amount--
    //     {orderlist
    //       .map((elem) => elem.buyData.totalAmount)
    //       .reduce((a, b) =>
    //         console.log("ab", a + b - Object.values(promocode), 0)
    //       )}
    //   </h1>
    // ) : (
    //   <h1>
    //     Total Amount--
    //     {orderlist
    //       .map((elem) => elem.buyData.totalAmount)
    //       .reduce((a, b) => console.log("ab", a + b, 0))}
    //   </h1>
    // );
  };
  useEffect(() => {
    setAmount(
      orderlist
        .map((elem) => elem.buyData.totalAmount)
        .reduce((a, b) => a + b, 0)
    );
  }, []);
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
          <th>cancelOrder</th>
        </tr>
        {orderlist.map((elem, i) => {
          return <Row elem={elem} />;
        })}
      </table>
      <input
        type="text"
        placeholder="Apply Promocode"
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      <button onClick={handleClick} id="myBtn" disabled={!inputData}>
        Apply
      </button>
      {
        <h1>
          Total Amount--
          {amount}
        </h1>
      }
    </div>
  );
};
export default AllOrders;
