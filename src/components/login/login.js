import React, { useState } from "react";
import login_page from "./img/login_page.svg";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Container from "react-bootstrap/esm/Container";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    console.log("Login Worked");
    event.preventDefault();
    setEmail("");
    setPassword("");
    console.log("submitForm -> email", email);
    console.log("submitForm -> password", password);
  }

  return (
    <div className="login_background">
      <Container className="login-container">
        <Row>
          <Col className="col-12 col-md-12  col-lg-6 login-form-1">
            <h3> Empowering the art of recruitment</h3>
            <img src={login_page} alt="Login" className="login" />
          </Col>
          <Col className="col-12 col-md-12  col-lg-6 login-form-2">
            <h3>Login</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Enter password"
                  style={{ backgroundColor: "#DADADA", color: "#10375c" }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicSubmit">
                <Button className="loginbtn" type="submit" onClick={submitForm}>
                  Login
                </Button>
                <Button
                  className="registerbtn btn "
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
