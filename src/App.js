import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";

import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
