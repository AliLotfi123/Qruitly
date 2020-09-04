import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";

import Dashboard from "./pages/Dashboard/Dashboard";
import AddVacancy from "./pages/Vacancy/AddVacancy";
import VacancyList from "./pages/Vacancy/VacancyList";
import ReceivedMessages from "./pages/Message/ReceivedMessages";
import AllRecruiters from "./pages/Recruiters/AllRecruiters";
import AllCandidates from "./pages/Candidates/AllCandidates";

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
          <Route exact path="/vacancys">
            <VacancyList />
          </Route>
          <Route exact path="/addvacancy">
            <AddVacancy />
          </Route>
          <Route exact path="/recruiters">
            <AllRecruiters />
          </Route>
          <Route exact path="/messages">
            <ReceivedMessages />
          </Route>
          <Route exact path="/candidates">
            <AllCandidates />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
