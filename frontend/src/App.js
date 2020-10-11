import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
