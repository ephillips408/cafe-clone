import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminPanel from "./components/pages/AdminPanel";
import Webstore from "./components/pages/Webstore";
import ProductPage from "./components/pages/ProductPage";
import Cart from "./components/pages/Cart";
import ShippingInfo from "./components/pages/ShippingInfo";
import PlaceOrder from "./components/pages/PlaceOrder";
import OrderSuccess from "./components/pages/OrderSuccess";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path = "/cart/:id?" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/order/:id" component={OrderSuccess} />
          <Route path="/panel" component={AdminPanel} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/store" component={Webstore} />
          <Route path="/shipping" component={ShippingInfo} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
