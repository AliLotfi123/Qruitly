import React, { useState } from "react";
import "./AddVacancy.css";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import register from "./img/register.svg";
import contact from "./img/contact.svg";
import agreement from "./img/agreement.svg";
import { useMutation } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

import { ADD_CANDIDATE } from "../../graphql/addcandidate";

export default function AddVacancyForm() {
  const [name, setName] = useState("");
  const [SkillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [description, setDescription] = useState("");
  const tags = [SkillOne, skillTwo, skillThree];
  const [filterdBudget, setFilterdBudget] = useState(2500);
  const [filterdSalary, setFilterdFilterdSalary] = useState(2500);
  const [AddCandidate, { data }] = useMutation(ADD_CANDIDATE);
  console.log(name);
  console.log(filterdSalary);
  console.log(filterdBudget);
  console.log(tags);

  console.log(description);
  function handleSubmit(event) {
    event.preventDefault();

    AddCandidate({
      variables: {
        name,
        tags,
        filterdBudget,
        filterdSalary,
        description,
      },
    });

    console.log(name);
    console.log(filterdSalary);
    console.log(filterdBudget);
    console.log(SkillOne);
    console.log(skillTwo);
    console.log(skillThree);
    console.log(description);
  }

  if (data) {
    return <h1>Candidate created</h1>;
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
        <div className=" col-lg-4 col-md-12  ">
          <div className="Benefit ">
            <img src={register} alt="Login" className="AddImg" />
            <div className="text-addvacancy">
              <h4>1. Add a candidate</h4>
              <p>
                Offering discounts for better online a store can loyalty weapon
                into driving
              </p>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-12  ">
          <div className="Benefit ">
            <img src={contact} alt="Login" className="AddImg" />
            <div className="text-addvacancy">
              <h4>2. Discuss with employer</h4>
              <p>
                Offering discounts for better online a store can loyalty weapon
                into driving
              </p>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-12">
          <div className="Benefit ">
            <img src={agreement} alt="Login" className="AddImg" />
            <div className="text-addvacancy">
              <h4>3. Candidate is accepted</h4>
              <p>
                Offering discounts for better online a store can loyalty weapon
                into driving
              </p>
            </div>
          </div>
        </div>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <div className=" col-lg-12 col-md-12 ">
          <div className="AddForm ">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                controlId="formGridName"
                className="TextForm"
              >
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </Col>
              </Form.Group>

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
                <Form.Group as={Col} controlId="formGridSkill">
                  <Form.Control
                    className="TextForm"
                    type="text"
                    placeholder="Skill 2"
                    onChange={(event) => setSkillTwo(event.target.value)}
                  />
                </Form.Group>{" "}
                <Form.Group as={Col} controlId="formGridSkill">
                  <Form.Control
                    className="TextForm"
                    type="text"
                    placeholder="Skill 3"
                    onChange={(event) => setSkillThree(event.target.value)}
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
                  <div className="form-group">
                    <label>Candidate Description</label>
                    <textarea
                      className="form-control rounded-0"
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
    </Container>
  );
}
