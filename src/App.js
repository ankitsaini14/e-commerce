import React from "react";
import Products from "./ui/Products";
import UiNavBar from "./NavBars/UiNavBar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SignIn from "./ui/SignIn";
import Cart from "./orders/Cart";
import AllOrders from "./orders/AllOrders";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <UiNavBar />
        </Route>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/allorders" component={AllOrders} />
      </Switch>
    </div>
  );
};
export default App;
