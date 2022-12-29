import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

export function getAllData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question: any) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUser: any, qid: any, answer: any) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
