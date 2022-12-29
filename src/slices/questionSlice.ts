import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", data: {} };

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
      const votes = (state.data as any)[action.payload.qid][
        action.payload.answer
      ].votes.concat([action.payload.authUser]);
      const answers = {
        ...(state.data as any)[action.payload.qid][action.payload.answer],
        votes: votes,
      };
      (state.data as any)[action.payload.qid] = {
        ...(state.data as any)[action.payload.qid],
        [action.payload.answer]: answers,
      };
    },
    saveQuestionRequest(state) {
      state.status = "loading";
    },
    saveQuestionSuccess(state, action) {
      state.status = "successfully";
      const question = { ...action.payload };
      (state.data as any)[action.payload.id] = question;
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
  saveQuestionRequest,
  saveQuestionSuccess,
  saveQuestionAnswerRequest,
} = actions;

export default reducer;
