import React, { useState } from "react";

import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

export default function AddVacancyForm() {
  const [sender, setSender] = useState("");
  console.log("AddVacancyForm -> sender", sender);
  const [receiver, setReceiver] = useState("");
  console.log("AddVacancyForm -> receiver", receiver);

  const [SkillOne, setSkillOne] = useState("");

  const [filterdBudget, setFilterdBudget] = useState(2500);
  const [filterdSalary, setFilterdFilterdSalary] = useState(2500);

  console.log(SkillOne);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    setFilterdFilterdSalary(filterdSalary);
    setFilterdBudget(filterdBudget);
    setSkillOne(SkillOne);
  }

  const minBudget = 500;
  const maxBudget = 5000;

  const minSalary = 500;
  const maxSalary = 5000;

  const Budget = filterdBudget;
  const Salary = filterdSalary;

  return (
    <Container>
      <Row style={{ marginTop: "25px" }}>
        <div className=" col-lg-12 col-md-12 ">
          <div className="AddForm ">
            <Form>
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
                      defaultValue="email@example.com"
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
                    Company Receiver
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                      type="text"
                      onChange={(event) =>
                        setReceiver(event.target.defaultValue)
                      }
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
                    placeholder="Skill 1"
                    onChange={(event) => setSkillOne(event.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicRangeCustom">
                  <Form.Label className="TextForm">
                    Set Minimun Salary {Salary}
                  </Form.Label>

                  <Form.Control
                    type="range"
                    custom
                    min={minSalary}
                    max={maxSalary}
                    onChange={(event) =>
                      setFilterdFilterdSalary(event.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicRangeCustom">
                  <Form.Label className="TextForm">
                    Set Minimum Price {Budget}
                  </Form.Label>

                  <Form.Control
                    type="range"
                    custom
                    min={minBudget}
                    max={maxBudget}
                    onChange={(event) => setFilterdBudget(event.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicRangeCustom">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Candidate Description
                    </label>
                    <textarea
                      class="form-control rounded-0"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </div>
                </Form.Group>
              </Form.Row>

              <Button
                variant="primary"
                type="submit"
                className="TextForm"
                onSubmit={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}
