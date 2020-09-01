import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
