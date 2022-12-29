import { Tab, Tabs } from "react-bootstrap";
import { useInitialState } from "../../hooks/useInitialState";
import QuestionList from "../../components/Question/QuestionList";
import "./styles.scss";
import { Questions } from "../../models/questions";

const HomePage = () => {
  const { users, questions, authUser } = useInitialState();
  const lstAns = Object.keys(users[authUser].answers);

  const formattedAnswerList = Object.values(questions)
    .filter((question: any) => lstAns.includes(question.id))
    .sort((a: any, b: any) => {
      return b.timestamp - a.timestamp;
    });

  const formattedUnanswerList = Object.values(questions)
    .filter((ques: any) => !lstAns.includes(ques.id))
    .sort((a: any, b: any) => {
      return b.timestamp - a.timestamp;
    });

  return (
    <>
      <Tabs className="tab-container">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          {formattedUnanswerList.map((ques: any, index) => (
            <QuestionList key={index} questionId={ques.id} />
          ))}
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          {formattedAnswerList.map((ques: any, index) => (
            <QuestionList key={index} questionId={ques.id} />
          ))}
        </Tab>
      </Tabs>
    </>
  );
};

export default HomePage;
