import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInitialState } from "../../../hooks/useInitialState";
import "./styles.scss";

interface Props {
  questionId: string;
}

const QuestionList = ({ questionId }: Props) => {
  const { users, questions } = useInitialState();

  const question = questions[questionId];
  const user = users[question.author];

  return (
    <Card style={{ margin: "1rem" }}>
      <Card.Header>{user.name} asks:</Card.Header>
      <Card.Body className="text-truncate">
        <Card.Text>{question.optionOne.text}</Card.Text>
        <Link to={`/questions/${question.id}`}>
          <Button variant="outline-primary">View Question</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default QuestionList;
