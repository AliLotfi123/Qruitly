import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register} />

          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
