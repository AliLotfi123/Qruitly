import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

import cross from "./img/cross.svg";
import like from "./img/like.svg";
import risk from "./img/risk.svg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NewMessage from "../../pages/Message/NewMessage";

export default function Vacancy({ vacancy }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosed = () => setShow(true);

  console.log("wat zijn de vacancys", vacancy.id);

  return (
    <Row key={vacancy.id}>
      <Col>
        <Row>
          <Col>{vacancy.name} </Col>
        </Row>
        <Row>
          <Col className="subTag"> {vacancy.tags.join(", ")} </Col>
        </Row>
      </Col>
      <Col>{vacancy.status}</Col>
      <Col>€ {vacancy.budget},-</Col>
      <Col>€ {vacancy.salary},-</Col>
      <Col>
        <Button
          className="button-dashboard"
          size="sm"
          variant={
            vacancy.status === "Open"
              ? "success"
              : vacancy.status === "In Progress"
              ? "warning"
              : "danger"
          }
          onClick={
            vacancy.status === "Open"
              ? handleShow
              : vacancy.status === "In Progress"
              ? handleShow
              : handleClosed
          }
        >
          <img
            className="buttonimg"
            src={
              vacancy.status === "Open"
                ? like
                : vacancy.status === "In Progress"
                ? risk
                : cross
            }
            alt="Dashboard Button"
          />
        </Button>
        {vacancy.status === "In Progress" ? (
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Job Title: {vacancy.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description: {vacancy.description}</p>
              <h6>Required Skills: {vacancy.tags.join(" ")}</h6>
            </Modal.Body>
            <Modal.Footer>
              <h4>
                Send message to vacancy owner:{" "}
                <NewMessage sender={vacancy.user.company_name} receiver={"2"} />
              </h4>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : vacancy.status === "Closed" ? (
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Closed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>
                Unfortunatly this vacancy is closed and applying not possible
                anymore!
              </h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Job Title: {vacancy.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description: {vacancy.description}</p>
              <h6>Required Skills: {vacancy.tags.join(" ")}</h6>
            </Modal.Body>
            <Modal.Footer>
              <h4>
                Send message to vacancy owner:{" "}
                <NewMessage
                  sender={vacancy.user.company_name}
                  receiver={"2"}
                  id={vacancy.id}
                />
              </h4>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Col>
    </Row>
  );
}
