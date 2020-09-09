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
import { useQuery } from "@apollo/react-hooks";

import { GET_ACCOUNT_DETAILS } from "../../graphql/userDetails";

import Nav from "react-bootstrap/esm/Nav";
import "./menuItems.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuItems({ recruiter }) {
  const { loading, error, data } = useQuery(GET_ACCOUNT_DETAILS);

  if (loading) return "Loading...";
  if (error) return <p>Error! ${error.message}</p>;

  // function handleSubmit(event) {
  //   event.preventDefault();

  return (
    <Nav className="mr-auto">
      <div className="Navbar">
        <div className="container">
          <Navbar.Brand className="logo" as={NavLink} to="/">
            Qruitly
          </Navbar.Brand>
          <ul>
            <li>
              <img src={home} alt="home" className="img-menu" />
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
            {data.user.map((user) => {
              return (
                <>
                  {recruiter === false ? (
                    <>
                      <li>
                        <img src={dash} alt="addvacancy" className="img-menu" />
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
                        <img
                          src={candidates}
                          alt="candidates"
                          className="img-menu"
                        />
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
                        <img
                          src={recruiters}
                          alt="recruiters"
                          className="img-menu"
                        />

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
                    </>
                  ) : (
                    <>
                      <li>
                        <img
                          src={vacancys}
                          alt="Vacancys"
                          className="img-menu"
                        />
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
                        <img
                          src={dash}
                          alt="addcandidate"
                          className="img-menu"
                        />
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
                    </>
                  )}
                </>
              );
            })}

            <li>
              <img src={message} alt="messages" className="img-menu" />

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
              <img src={account} alt="myaccount" className="img-menu" />

              <NavLink
                className="navItem"
                exact
                to="/myaccount"
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                My Account
              </NavLink>
            </li>
          </ul>
          {/* 
          <Button className="logout" type="submit" onClick={handleSubmit}>
            Logout
          </Button> */}
        </div>
      </div>
    </Nav>
  );
}
