import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

import cross from "./img/cross.svg";
import like from "./img/like.svg";
import risk from "./img/risk.svg";

export default function Vacancy({ vacancy }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosed = () => setShow(true);

  return (
    <tr
      key={vacancy.id}
      // class={
      //   vacancys.status === "Open"
      //     ? "table-success"
      //     : vacancys.status === "In Progress"
      //     ? "table-warning"
      //     : vacancys.status === "Closed"
      //     ? "table-danger"
      //     : ""
      // }
    >
      <td>{vacancy.name}</td>

      <td>{vacancy.tags.join(" ")} </td>
      <td>{vacancy.budget}</td>
      <td>{vacancy.salary}</td>
      <td>{vacancy.status}</td>
      <td>
        <Button
          className="button-dashboard"
          size="sm"
          variant={
            vacancy.status === "Open"
              ? "success"
              : vacancy.status === "In Progress"
              ? "warning"
              : vacancy.status === "Closed"
              ? "danger"
              : ""
          }
          onClick={
            vacancy.status === "Open"
              ? handleShow
              : vacancy.status === "In Progress"
              ? handleShow
              : vacancy.status === "Closed"
              ? handleClosed
              : ""
          }
        >
          <img
            className="buttonimg"
            src={
              vacancy.status === "Open"
                ? like
                : vacancy.status === "In Progress"
                ? risk
                : vacancy.status === "Closed"
                ? cross
                : ""
            }
            alt="Dashboard Button"
          />
        </Button>
        {vacancy.status === "Closed" ? (
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
        ) : vacancy.status === "In Progress" ? (
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Job Title: {vacancy.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description: {vacancy.description}</p>
              <h6>Required Skills: {vacancy.tags.join(" ")}</h6>
            </Modal.Body>
            <Modal.Footer>
              <b>Hurry up! Vacancys is almost closed</b>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* <Button
          className="button-dashboard"
          size="sm"
          variant={
            vacancy.status === "Open"
              ? "success"
              : vacancy.status === "In Progress"
              ? "warning"
              : vacancy.status === "Closed"
              ? "danger"
              : ""
          }
          onClick={
            vacancy.status === "Open"
              ? handleShow
              : vacancy.status === "In Progress"
              ? handleShow
              : vacancy.status === "Closed"
          }
        >
          <img
            className="buttonimg"
            src={
              vacancy.status === "Open"
                ? like
                : vacancy.status === "In Progress"
                ? risk
                : vacancy.status === "Closed"
                ? cross
                : ""
            }
            alt="Dashboard Button"
          />
        </Button>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Title: {vacancy.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Description: {vacancy.description}</p>
            <h6>Required Skills: {vacancy.tags.join(" ")}</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </td>
    </tr>
  );
}
