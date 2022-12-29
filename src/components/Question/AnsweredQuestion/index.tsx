import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import { useInitialState } from "../../../hooks/useInitialState";
import { calculateVotesPercentage } from "../../../utils";

interface Props {
  questionId: string;
}

const AnsweredQuestion = ({ questionId }: Props) => {
  const { users, questions, authUser } = useInitialState();
  const question = questions[questionId] || null;
  const author = question ? users[question.author] : null;

  const { optionOne, optionTwo } = question;
  const { name } = author;

  const allVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = calculateVotesPercentage(
    optionOne.votes.length,
    allVotes
  );
  const optionTwoPercentage = calculateVotesPercentage(
    optionTwo.votes.length,
    allVotes
  );

  return (
    <Card bg="light" className="m-3">
      <Card.Header>{name} asks:</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item className="position-relative">
            {optionOne.text}
            {optionOne.votes.includes(authUser) ? (
              <span>(Your choice)</span>
            ) : null}
            <ProgressBar
              now={optionOnePercent}
              label={`${optionOnePercent}%`}
            />
            <Card.Text className="text-muted">
              {optionOne.votes.length} out of {allVotes} users
            </Card.Text>
          </ListGroup.Item>
          <ListGroup.Item className="position-relative">
            {optionTwo.text}
            {optionTwo.votes.includes(authUser) ? (
              <span>(Your choice)</span>
            ) : null}
            <ProgressBar
              now={optionTwoPercentage}
              label={`${optionTwoPercentage}%`}
            />
            <Card.Text className="text-muted">
              {optionTwo.votes.length} out of {allVotes} users
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default AnsweredQuestion;
