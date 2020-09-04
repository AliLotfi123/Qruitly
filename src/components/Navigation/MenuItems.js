import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import home from "./img/home.svg";
import vacancys from "./img/vacancys.svg";
import candidates from "./img/candidates.svg";
import recruiters from "./img/recruiters.svg";
import account from "./img/account.svg";
import message from "./img/message.svg";
import dash from "./img/dash.svg";

import Button from "react-bootstrap/esm/Button";
import "./menuItems.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuItems() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Navbar">
      <div className="container">
        <Navbar.Brand className="logo" as={NavLink} to="/">
          Qruitly
        </Navbar.Brand>
        <ul>
          <li>
            <img src={home} alt="Login" className="img-menu" />
            <NavLink
              className="navItem"
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <img src={vacancys} alt="Vacancys" className="img-menu" />
            <NavLink
              className="navItem"
              exact
              to="/vacancys"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Vacancys
            </NavLink>
          </li>

          <li>
            <img src={dash} alt="Login" className="img-menu" />
            <NavLink
              className="navItem"
              exact
              to="/addvacancy"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Add Vacancys
            </NavLink>
          </li>

          <li>
            <img src={candidates} alt="Login" className="img-menu" />
            <NavLink
              className="navItem"
              exact
              to="/candidates"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Candidates
            </NavLink>
          </li>

          <li>
            <img src={dash} alt="Login" className="img-menu" />
            <NavLink
              className="navItem"
              exact
              to="/addcandidate"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Add Candidate
            </NavLink>
          </li>
          <li>
            <img src={recruiters} alt="Login" className="img-menu" />

            <NavLink
              className="navItem"
              exact
              to="/recruiters"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Recruiters
            </NavLink>
          </li>
          <li>
            <img src={message} alt="Login" className="img-menu" />

            <NavLink
              className="navItem"
              exact
              to="/messages"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <img src={account} alt="Login" className="img-menu" />

            <NavLink
              className="navItem"
              exact
              to="/login"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              My Account
            </NavLink>
          </li>
        </ul>

        <Button className="logout" type="submit" onClick={handleSubmit}>
          Logout
        </Button>
      </div>
    </div>
  );
}
