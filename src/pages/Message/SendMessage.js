import React, { useState } from "react";

import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useMutation } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import { SEND_MESSAGE } from "../../graphql/messages";

export default function SendMessageForm({
  receiver,
  sender,
  id,
  company_name,
  sender_name,
}) {
  const [subject, setSubject] = useState("");

  const [description, setDescription] = useState("");

  const [SendMessage, { data }] = useMutation(SEND_MESSAGE);

  function handleSubmit(event) {
    event.preventDefault();

    SendMessage({
      variables: {
        sender,
        receiver,
        subject,
        description,
        id,
      },
    });
  }

  if (data) {
    return <h1>Message Send</h1>;
  }

  return (
    <Row style={{ marginTop: "25px" }}>
      <div className=" col-lg-12 col-md-12 ">
        <div className="AddForm ">
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group
                as={Row}
                controlId="formGridName"
                className="TextForm"
              >
                <Form.Label column sm="6">
                  Company Receiver
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={company_name}
                    type="text"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formGridName"
                className="TextForm"
              >
                <Form.Label column sm="6">
                  Company Sender
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={sender_name}
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridSkill"
                className="TextForm"
              >
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  onChange={(event) => setSubject(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formBasicRangeCustom">
                <div class="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Candidate Description
                  </label>
                  <textarea
                    class="form-control rounded-0"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" className="TextForm">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Row>
  );
}
