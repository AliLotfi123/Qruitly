import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "bootstrap/dist/css/bootstrap.min.css";
import register_page from "./img/register_page.svg";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [userType, setUserType] = useState("");

  function submitForm(event) {
    console.log("Login Worked");
    event.preventDefault();
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setCompany("");
    setUserType("");
    console.log("submitForm -> userType", userType);

    console.log("Register -> firstName", firstName);
    console.log("Register -> lastName", lastName);
    console.log("Register -> company", company);
    console.log("submitForm -> email", email);
    console.log("submitForm -> password", password);
  }

  const users = [
    { name: "Employer", value: "Employer" },
    { name: "Recruiter", value: "Recruiter" },
  ];

  return (
    <div className="register_background">
      <Container className="register-container">
        <Row>
          <Col className="col-12 col-md-12  col-lg-6 login-form-1">
            <h3> Empowering the art of recruitment</h3>
            <img src={register_page} alt="Register" className="register" />
          </Col>
          <Col className="col-12 col-md-12  col-lg-6 login-form-2">
            <h3>Register</h3>
            <Form>
              <Row>
                <Form.Group controlId="formBasicFirstName" className="col-6">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    type="text"
                    placeholder="Firstname"
                    style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName" className="col-6">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    type="text"
                    placeholder="Lastname"
                    style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                    required
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="formBasicCompany" className="col-6">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    type="text"
                    placeholder="Company"
                    style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col-6">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder=" Enter email"
                    style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                    required
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formBasicPassword" className="col-12">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Enter password"
                    style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                    required
                  />
                </Form.Group>
              </Row>
              <ButtonGroup toggle className="button-group">
                {users.map((user, idx) => (
                  <ToggleButton
                    className="toggle-button"
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={user.value}
                    checked={userType === user.value}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    {user.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Form.Group controlId="formBasicSubmit">
                <Button
                  className="registerbutton btn "
                  type="submit"
                  onClick={submitForm}
                >
                  Register
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
