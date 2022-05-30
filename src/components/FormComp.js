import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import RateComp from "./Rate";
import Microphone from "./Recorder/Microphone";

const FormComp = () => {
  const [step, setStep] = useState(1);
  const [validated, setValidated] = useState(false);

  //   Form data
  const [department, setDepartment] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [files, setFiles] = useState([null]);

  const pushFile = (file) => {
    setFiles([...files, file]);
  };
  const stepOneValidator = department !== "" && salesPerson !== "" && !!rating;
  const stepTwoValidator =
    firstName !== "" && lastName !== "" && phone.length === 11 && email !== "";
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    console.log({
      stepOneValidator,
      department,
      salesPerson,
      comment,
      rating,
      firstName,
      lastName,
    });

    setValidated(true);
    setStep(3);
  };
  const resetForm = () => {
    setDepartment("");
    setSalesPerson("");
    setComment("");
    setRating("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setFiles([null]);
  };

  const feedback = (
    <>
      <Row>
        <Col className="spacer-y">
          <Form.Select
            required
            aria-label="Department Select"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="dep 1">Sales dep</option>
            <option value="dep 2">Customer relationship dep</option>
            <option value="dep 3">Collection depa</option>
          </Form.Select>
        </Col>
        <Col className="spacer-y">
          <Form.Select
            required
            aria-label="Sales Select"
            onChange={(e) => setSalesPerson(e.target.value)}
          >
            <option value="">Select Sales Person</option>
            <option value="sales person 1">Sales Rep. 1</option>
            <option value="sales person 2">C R Rep. 1</option>
            <option value="sales person 3">Coll. 1</option>
          </Form.Select>
        </Col>
        <Col sm={12}>
          {rating < 1 && (
            <h4 className="spacer-y">Please Rate You Experience</h4>
          )}
          <RateComp
            className="rate-select"
            value={rating}
            setRating={setRating}
          />
        </Col>
        <Form.Group as={Col} md="12" className="spacer-y" controlId="comment">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Your Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <h2 className="line-divider ">
          <span className="span-line-divider ">OR</span>
        </h2>
        <Form.Group as={Col} md="12" className="spacer-y" controlId="comment">
          <Microphone pushFile={pushFile} />
        </Form.Group>
      </Row>
      <div className="form-btns-wrapper">
        <Button
          className={`${!stepOneValidator && "btn-secondary "}`}
          type="button"
          onClick={() => setStep(2)}
          disabled={!stepOneValidator}
        >
          Next
        </Button>
      </div>
    </>
  );

  const personalInformation = (
    <>
      <Row>
        <Form.Group as={Col} md="6" className="spacer-y" controlId="firstname">
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="spacer-y" controlId="lastname">
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="spacer-y" controlId="email">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="spacer-y" controlId="phone">
          <Form.Control
            required
            type="tel"
            pattern="[0-9]{11}"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <div className="form-btns-wrapper spacer-y">
        <Button type="button" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button
          className={`${!stepTwoValidator && "btn-secondary "}`}
          disabled={!stepTwoValidator}
          type="submit"
          onClick={() => {
            setStep(3);
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
  const showSteps = (step) => {
    switch (step) {
      case 1:
        return feedback;
      case 2:
        return personalInformation;
      case 3:
        return (
          <div div className="success-wrap">
            <p>
              Thanks for you feedback <span>{`${firstName} ${lastName}`}</span>
            </p>
            <div>
              <img src="/accept.png" alt="success" />
            </div>
          </div>
        );
      default:
        return feedback;
    }
  };

  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        resetForm();
        setStep(1);
      }, 5000);
    }
  }, [step]);
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {showSteps(step)}
      </Form>
    </>
  );
};

export default FormComp;
