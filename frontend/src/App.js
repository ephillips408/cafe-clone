import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css"
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
