import React, { useState, useEffect } from "react";
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
import AddCandidate from "./pages/Candidates/AddCandidate";
import MyAccount from "./pages/MyAccount/MyAccount";
import Form from "react-bootstrap/esm/Form";

function App() {
  const [recruiter, setRecruiter] = useState(false);

  return (
    <div className="app">
      <Form.Control
        as="select"
        onChange={(event) => setRecruiter(event.target.value)}
      >
        <option value={false}> Employer</option>
        <option value={true}>Recruiter</option>
      </Form.Control>

      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard recruiter={recruiter} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/vacancys">
            <VacancyList recruiter={recruiter} />
          </Route>
          <Route exact path="/addvacancy">
            <AddVacancy recruiter={recruiter} />
          </Route>
          <Route exact path="/addcandidate">
            <AddCandidate recruiter={recruiter} />
          </Route>
          <Route exact path="/recruiters">
            <AllRecruiters recruiter={recruiter} />
          </Route>
          <Route exact path="/messages">
            <ReceivedMessages recruiter={recruiter} />
          </Route>
          <Route exact path="/candidates">
            <AllCandidates recruiter={recruiter} />
          </Route>
          <Route exact path="/myaccount">
            <MyAccount recruiter={recruiter} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
