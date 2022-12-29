import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";
import {FormatQuestion, Questions} from '../models/questions';

export function getAllData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question: FormatQuestion) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authUser: string, qid: string, answer: string) {
  return _saveQuestionAnswer({ authUser, qid, answer });
}
