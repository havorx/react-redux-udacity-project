import { createSlice } from "@reduxjs/toolkit";
import { Questions } from "../models/questions";

interface QuestionState {
  status: string;
  data: Questions | any;
}

const initialState: QuestionState = { status: "", data: {} };

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getListQuestionSuccess(state, action) {
      state.status = "successfully";
      state.data = action.payload;
    },
    addAnswerToQuestionSuccess(state, action) {
      state.status = "successfully";
      const votes = state.data[action.payload.qid][
        action.payload.answer
      ].votes.concat([action.payload.authUser]);
      const answers = {
        ...state.data[action.payload.qid][action.payload.answer],
        votes: votes,
      };
      state.data[action.payload.qid] = {
        ...state.data[action.payload.qid],
        [action.payload.answer]: answers,
      };
    },
    saveQuestionRequest(state) {
      state.status = "loading";
    },
    saveQuestionSuccess(state, action) {
      state.status = "successfully";
      state.data[action.payload.id] = { ...action.payload };
    },
    saveQuestionAnswerRequest(state) {
      state.status = "loading";
    },
  },
});

const { actions, reducer } = questionSlice;

export const {
  getListQuestionSuccess,
  addAnswerToQuestionSuccess,
  saveQuestionSuccess,
} = actions;

export default reducer;
