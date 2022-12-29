import { FormEvent, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useInitialState } from "../../../hooks/useInitialState";

const UnansweredQuestion = ({ questionId }: any) => {
  const formRef = useRef<any>();
  const { users, questions, handleSaveQuestionAnswer, authUser } =
    useInitialState();

  const question = (questions as any)[questionId];
  const author = question ? (users as any)[question.author] : null;

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const answer = formRef.current.answer.value;
    if (answer !== "") {
      handleSaveQuestionAnswer(authUser, question.id, answer);
    }
  };

  if (!question) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Card style={{ margin: "1rem" }}>
      <Card.Header>{author.name} asks:</Card.Header>{" "}
      <Card.Body>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Form.Check
            type="radio"
            id="optionOne"
            value="optionOne"
            label={question.optionOne.text}
            name="answer"
            className="mb-2"
            defaultChecked
          />
          <Form.Check
            type="radio"
            id="optionTwo"
            value="optionTwo"
            label={question.optionTwo.text}
            name="answer"
            className="mb-2"
          />
          <Button type="submit" className=" mt-2" variant="outline-primary">
            Vote
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UnansweredQuestion;
