import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../login/login";
import Register from "../register/register";

import MenuItems from "./MenuItems";

export default function Menu() {
  return (
    <div>
      <Router>
        <MenuItems />
        <Switch>
          {/* <Route exact path="/" component={menu} /> */}
          <Route exact path="/register" component={Register} />

          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
