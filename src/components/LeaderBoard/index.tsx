import { useInitialState } from "../../hooks/useInitialState";
import { Card } from "react-bootstrap";
import "./styles.scss";
import { Users } from "../../models/users";

function LeaderBoard() {
  const { users } = useInitialState();

  const leaderBoard = Object.values(users)
    .map((user: Users | any) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerTotal: Object.keys(user.answers).length,
      questionTotal: user.questions.length,
      total: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);

  return (
    <>
      <div className="board-container">
        {leaderBoard.map((board, index) => (
          <Card key={board.id}>
            <Card.Header className="card-header">
              <div>{board.name}</div>
              <div className="card-header__count">{index + 1}</div>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Answered Questions: {board.answerTotal}
                <br />
                Created Questions: {board.questionTotal}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              Total: {board.total} {board.total > 1 ? "questions" : "question"}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default LeaderBoard;
