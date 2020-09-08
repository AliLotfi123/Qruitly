import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import SendMessage from "./SendMessage";
import replay from "./img/replay.svg";

export default function Vacancy({ sender, receiver }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="button-dashboard"
        size="sm"
        variant={"success"}
        onClick={handleShow}
      >
        <img className="buttonimg" src={replay} alt="Dashboard Button" />
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {receiver}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SendMessage sender={sender} receiver={receiver} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
