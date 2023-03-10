// write function with redux-thunk
import { getAllData, saveQuestion, saveQuestionAnswer } from "../services";
import {
  addAnswerToUsersSuccess,
  addQuestionToUsersSuccess,
  getListUsersSuccess,
} from "../slices/userSlice";
import {
  addAnswerToQuestionSuccess,
  getListQuestionSuccess,
  saveQuestionSuccess,
} from "../slices/questionSlice";
import { Dispatch } from "@reduxjs/toolkit";
import {FormatQuestion, QuestionAnswer} from '../models/questions';

export function getInitialDataThunk() {
  return async (dispatch: Dispatch) => {
    const { users, questions } = await getAllData();
    dispatch(getListUsersSuccess(users));
    dispatch(getListQuestionSuccess(questions));
  };
}

export function saveQuestionThunk(question: FormatQuestion) {
  return (dispatch: Dispatch) => {
    return saveQuestion(question).then((questionRes) => {
      dispatch(saveQuestionSuccess(questionRes));
      dispatch(addQuestionToUsersSuccess(questionRes));
    });
  };
}

export function saveQuestionAnswerThunk(data: QuestionAnswer) {
  const { authUser, qid, answer } = data;
  return (dispatch: Dispatch) => {
    return saveQuestionAnswer(authUser, qid, answer).then(() => {
      dispatch(addAnswerToQuestionSuccess({ authUser, qid, answer }));
      dispatch(addAnswerToUsersSuccess({ authUser, qid, answer }));
    });
  };
}
