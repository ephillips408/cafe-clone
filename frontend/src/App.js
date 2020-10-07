import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css"
import HomePage from "./components/pages/HomePage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewNavbar from "./components/NewNavbar";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NewNavbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
