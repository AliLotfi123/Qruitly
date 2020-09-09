import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

import like from "./img/like.svg";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NewMessage from "../../pages/Message/NewMessage";

export default function Candidate({ candidates }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("Hier komt het binnen", candidates);

  return (
    <>
      {candidates.candidates.map((candidate) => {
        return (
          <Row key={candidates.id}>
            <Col>
              <Row>
                <Col>{candidate.first_name}</Col>
              </Row>
              <Row>
                <Col className="subTag">{candidate.tags.join(", ")}</Col>
              </Row>
            </Col>
            <Col>{candidate.status}</Col>
            <Col> {candidate.price}</Col>
            <Col> {candidate.salary}</Col>

            <Col>
              <Button
                className="button-dashboard"
                size="sm"
                variant={"success"}
                onClick={handleShow}
              >
                <img className="buttonimg" src={like} alt="Dashboard Button" />
              </Button>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Job Title: {candidate.first_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Description: {candidate.description}</p>
                  <h6>Required Skills: {candidate.tags.join(" ")}</h6>
                </Modal.Body>
                <Modal.Footer>
                  <h4>
                    Send message to candidate owner:{" "}
                    <NewMessage
                      sender={candidates.company_name}
                      receiver={1}
                      id={2}
                    />
                  </h4>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        );
      })}
    </>
  );
}
