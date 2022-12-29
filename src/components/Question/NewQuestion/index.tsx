import {ChangeEvent, FormEvent, useState} from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useInitialState } from "../../../hooks/useInitialState";
import "./styles.scss";

const NewQuestion = () => {
  const { authUser, handleSaveQuestion } = useInitialState();
  const navigate = useNavigate();
  const [optionValue, setOptionValue] = useState<{
    optionOne: string;
    optionTwo: string;
  }>({
    optionOne: "",
    optionTwo: "",
  });
  const { optionOne, optionTwo } = optionValue;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = {
      author: authUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };
    handleSaveQuestion(question);
    setOptionValue({
      optionOne: "",
      optionTwo: "",
    });
    navigate("/");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setOptionValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Card bg="light" className="m-3 text-center">
        <Card.Header className="p-3">
          <h4>
            <b>Would you rather</b>
          </h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="optionOne">
              <Form.Control
                type="text"
                name="optionOne"
                placeholder="Enter..."
                value={optionOne}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Form.Group>
            <h4>
              <small>OR</small>
            </h4>
            <Form.Group controlId="optionTwo">
              <Form.Control
                type="text"
                name="optionTwo"
                placeholder="Enter..."
                value={optionTwo}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Form.Group>
            <Button
              style={{ marginTop: "1.5rem" }}
              type="submit"
              variant="outline-primary"
              className={`f-width ${
                optionOne === "" || optionTwo === "" ? "disabled" : ""
              }`}
              disabled={optionOne === "" || optionTwo === ""}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewQuestion;
