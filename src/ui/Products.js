import React from "react";
import ItemsList from "../ItemsList.json";
import "../App.css";
import { addCart } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import OrderNavBars from "../NavBars/OrderNavBars";
import swal from "sweetalert";

// console.log("products", ItemsList[0]);

const Products = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cartReducers.list);

  return (
    <div>
      <OrderNavBars />
      {ItemsList.map((items) => {
        return (
          <div className="producthead">
            <div>
              <img src={items.picture} className="productimg" alt="images" />
              <h2>{items.name}</h2>
              <p>Available in-{Object.keys(items.size).join(",")}</p>
              <p>Price-{items.price}</p>
              <button
                onClick={() => {
                  if (!list.some((elem) => elem.data.id === items.id)) {
                    dispatch(addCart(items));
                    swal(items.name, "Your Item Added In Cart!", "success");
                  }
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
