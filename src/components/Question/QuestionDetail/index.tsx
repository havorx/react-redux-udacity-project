import { useParams } from "react-router-dom";
import UnansweredQuestion from "../UnansweredQuestion";
import AnsweredQuestion from "../AnsweredQuestion";
import { useInitialState } from "../../../hooks/useInitialState";

const QuestionDetail = () => {
  const { users, authUser } = useInitialState();
  const { questionId = "" } = useParams();
  const answers = Object.keys((users as any)[authUser].answers);
  const unanswered = answers.includes(questionId);

  return (
    <>
      {!unanswered ? (
        <UnansweredQuestion questionId={questionId} />
      ) : (
        <AnsweredQuestion questionId={questionId} />
      )}
    </>
  );
};

export default QuestionDetail;
