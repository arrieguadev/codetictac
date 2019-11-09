import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Success from "./pages/Success";
import NewAccount from "./pages/NewAccount";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Main} />
      <Route path="/success" exact component={Success} />
      <Route path="/new-account" exact component={NewAccount} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
